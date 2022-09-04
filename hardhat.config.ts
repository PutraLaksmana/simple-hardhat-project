import 'dotenv/config';
import fs from 'fs';
import fsExtra from 'fs-extra';
import { HardhatUserConfig } from 'hardhat/types';
import { subtask, task, types } from 'hardhat/config';
import { TASK_CLEAN } from 'hardhat/builtin-tasks/task-names';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';

let mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
	mnemonic = 'test test test test test test test test test test test junk';
}
const mnemonicAccounts = {
	mnemonic,
};

// This account is added in harmony node localnet as test account
const testLocalnetAccount = {
	address: '',
	privateKey: '',
};

const account: { [name: string]: string | undefined } = {
	Localnet: process.env.LOCALNET_PRIVATE_KEY,
	AuroraTestnet: process.env.AURORAT_PRIVATE_KEY,
	AuroraMainnet: process.env.AURORAM_PRIVATE_KEY,
};

// Default output dir to abi contracts in frontend
const contractsFrontDir = './CONTRACTS';

// This adds support for typescript paths mappings
import 'tsconfig-paths/register';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.2',
	},
	defaultNetwork: 'localnet',
	networks: {
		hardhat: {
			live: false,
			saveDeployments: false,
			accounts: mnemonicAccounts,
			
		},
		localnet: {
			live: false,
			url: 'http://localhost:9500',
			chainId:  22,
			accounts: account.Localnet ? [account.Localnet] : [testLocalnetAccount.privateKey],
		},
		auroraTestnet: {
			live: true,
			url: 'https://testnet.aurora.dev/',
			chainId:  1313161555,
			accounts: account.AuroraTestnet ? [account.AuroraTestnet] : mnemonicAccounts,
		},
		auroraMainnet: {
			live: true,
			url: 'https://mainnet.aurora.dev/',
			chainId: 1313161554,
			accounts: account.AuroraMainnet ? [account.AuroraMainnet] : mnemonicAccounts,
		},
	},
	typechain: {
		outDir: 'types',
		target: 'ethers-v5',
	},
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
		},
	},
};


task(TASK_CLEAN, 'Clean all artifacts & folder contracts in frontend').setAction(async (taskArgs, hre, runSuper) => {
	await runSuper();
	if (fs.existsSync('./deployments')) {
		fs.rmdirSync('./deployments', { recursive: true });
	}
	await hre.run('clean-front-contracts');
});

subtask('clean-front-contracts', 'Clear frontend contracts folder').setAction(async () => {
	// Clear if exist
	if (fs.existsSync(contractsFrontDir)) {
		fsExtra.emptyDirSync(contractsFrontDir);
	}
});

task('deploy', 'Deploy contracts').setAction(async (taskArgs, hre, runSuper) => {
	if (!fs.existsSync(contractsFrontDir)) {
		fs.mkdirSync(contractsFrontDir, { recursive: true });
	}
	await runSuper(taskArgs);
});

export default config;
