## Simple Hardhat Project 
### Simple Contract Multi Sender 
- [Deployed At Aurora Network](https://aurorascan.dev/address/0x1445534e27da589E9839B121f47bE28eDf1d88C4)


## Getting Started 
```
git clone https://github.com/PutraLaksmana/simple-hardhat-project.git
```

Install Dependencies
```
yarn install
```

deploy Testnet
```
yarn deploy:Testnet
```

deploy Mainnet
```
yarn deploy:Mainnet
```


## Setup 

#### Setup Contract 
create contract in solidity file ``contracts/``

change contract name in ``deploy/001_deploy_contractname``
```
import { HardhatRuntimeEnvironment } from 'hardhat/types';
import { DeployFunction } from 'hardhat-deploy/types';
const deploy: DeployFunction = async ({ getNamedAccounts, deployments }: HardhatRuntimeEnvironment) => {
	const { deploy } = deployments;
	const { deployer } = await getNamedAccounts();
	console.log(deployer);
	await deploy('your contract name', {
		from: deployer,
		log: true,
	});
};

export default deploy;

export const tags = ['your contract name'];

```
#### Setup Network 
- change network in file ``hardhat.config.ts``
```
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
		Testnet: {
			live: true,
			url: 'rpc network',
			chainId:  chainid network,
			accounts: account.Testnet ? [account.Testnet] : mnemonicAccounts,
		},
		Mainnet: {
			live: true,
			url: 'rpc network',
			chainId:  chainid network,
			accounts: account.Mainnet ? [account.Mainnet] : mnemonicAccounts,
		},
	},
```

