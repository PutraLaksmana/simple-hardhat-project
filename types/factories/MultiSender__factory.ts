/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MultiSender, MultiSenderInterface } from "../MultiSender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "transferERC1155",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "transferERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_tokenIds",
        type: "uint256[]",
      },
    ],
    name: "transferERC721",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "_recipients",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_amounts",
        type: "uint256[]",
      },
    ],
    name: "transferETH",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610f78806100206000396000f3fe60806040526004361061003f5760003560e01c80635fbfd3ec14610044578063a11fde371461006d578063dd059c4114610089578063fa558b71146100b2575b600080fd5b34801561005057600080fd5b5061006b6004803603810190610066919061095a565b6100db565b005b61008760048036038101906100829190610a05565b6102ba565b005b34801561009557600080fd5b506100b060048036038101906100ab91906108db565b61049f565b005b3480156100be57600080fd5b506100d960048036038101906100d491906108db565b6105f7565b005b815183511461011f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161011690610c13565b60405180910390fd5b8051835114610163576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161015a90610bd3565b60405180910390fd5b60005b83518110156102b3578473ffffffffffffffffffffffffffffffffffffffff1663f242432a338684815181106101c5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151868581518110610206577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151868681518110610247577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518563ffffffff1660e01b815260040161026e9493929190610b7b565b600060405180830381600087803b15801561028857600080fd5b505af115801561029c573d6000803e3d6000fd5b5050505080806102ab90610da1565b915050610166565b5050505050565b80518251146102fe576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f590610bd3565b60405180910390fd5b600080600090505b825181101561037057828181518110610348577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518261035b9190610cd2565b9150808061036890610da1565b915050610306565b508034146103b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103aa90610bf3565b60405180910390fd5b60005b8351811015610499578381815181106103f8577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166108fc848381518110610452577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101519081150290604051600060405180830381858888f19350505050158015610485573d6000803e3d6000fd5b50808061049190610da1565b9150506103b6565b50505050565b80518251146104e3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104da90610c13565b60405180910390fd5b60005b82518110156105f1578373ffffffffffffffffffffffffffffffffffffffff166342842e0e33858481518110610545577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b6020026020010151858581518110610586577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b81526004016105ac93929190610b44565b600060405180830381600087803b1580156105c657600080fd5b505af11580156105da573d6000803e3d6000fd5b5050505080806105e990610da1565b9150506104e6565b50505050565b805182511461063b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063290610bd3565b60405180910390fd5b60005b825181101561076a578373ffffffffffffffffffffffffffffffffffffffff166323b872dd3385848151811061069d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101518585815181106106de577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60200260200101516040518463ffffffff1660e01b815260040161070493929190610b44565b602060405180830381600087803b15801561071e57600080fd5b505af1158015610732573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107569190610a71565b50808061076290610da1565b91505061063e565b50505050565b600061078361077e84610c58565b610c33565b905080838252602082019050828560208602820111156107a257600080fd5b60005b858110156107d257816107b88882610848565b8452602084019350602083019250506001810190506107a5565b5050509392505050565b60006107ef6107ea84610c84565b610c33565b9050808382526020820190508285602086028201111561080e57600080fd5b60005b8581101561083e578161082488826108c6565b845260208401935060208301925050600181019050610811565b5050509392505050565b60008135905061085781610efd565b92915050565b600082601f83011261086e57600080fd5b813561087e848260208601610770565b91505092915050565b600082601f83011261089857600080fd5b81356108a88482602086016107dc565b91505092915050565b6000815190506108c081610f14565b92915050565b6000813590506108d581610f2b565b92915050565b6000806000606084860312156108f057600080fd5b60006108fe86828701610848565b935050602084013567ffffffffffffffff81111561091b57600080fd5b6109278682870161085d565b925050604084013567ffffffffffffffff81111561094457600080fd5b61095086828701610887565b9150509250925092565b6000806000806080858703121561097057600080fd5b600061097e87828801610848565b945050602085013567ffffffffffffffff81111561099b57600080fd5b6109a78782880161085d565b935050604085013567ffffffffffffffff8111156109c457600080fd5b6109d087828801610887565b925050606085013567ffffffffffffffff8111156109ed57600080fd5b6109f987828801610887565b91505092959194509250565b60008060408385031215610a1857600080fd5b600083013567ffffffffffffffff811115610a3257600080fd5b610a3e8582860161085d565b925050602083013567ffffffffffffffff811115610a5b57600080fd5b610a6785828601610887565b9150509250929050565b600060208284031215610a8357600080fd5b6000610a91848285016108b1565b91505092915050565b610aa381610d28565b82525050565b6000610ab6600283610cc1565b9150610ac182610e59565b602082019050919050565b6000610ad9600283610cb0565b9150610ae482610e82565b602082019050919050565b6000610afc600283610cc1565b9150610b0782610eab565b602082019050919050565b6000610b1f600283610cc1565b9150610b2a82610ed4565b602082019050919050565b610b3e81610d66565b82525050565b6000606082019050610b596000830186610a9a565b610b666020830185610a9a565b610b736040830184610b35565b949350505050565b600060a082019050610b906000830187610a9a565b610b9d6020830186610a9a565b610baa6040830185610b35565b610bb76060830184610b35565b8181036080830152610bc881610acc565b905095945050505050565b60006020820190508181036000830152610bec81610aa9565b9050919050565b60006020820190508181036000830152610c0c81610aef565b9050919050565b60006020820190508181036000830152610c2c81610b12565b9050919050565b6000610c3d610c4e565b9050610c498282610d70565b919050565b6000604051905090565b600067ffffffffffffffff821115610c7357610c72610e19565b5b602082029050602081019050919050565b600067ffffffffffffffff821115610c9f57610c9e610e19565b5b602082029050602081019050919050565b600082825260208201905092915050565b600082825260208201905092915050565b6000610cdd82610d66565b9150610ce883610d66565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610d1d57610d1c610dea565b5b828201905092915050565b6000610d3382610d46565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b610d7982610e48565b810181811067ffffffffffffffff82111715610d9857610d97610e19565b5b80604052505050565b6000610dac82610d66565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415610ddf57610dde610dea565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6000601f19601f8301169050919050565b7f3031000000000000000000000000000000000000000000000000000000000000600082015250565b7f3078000000000000000000000000000000000000000000000000000000000000600082015250565b7f3033000000000000000000000000000000000000000000000000000000000000600082015250565b7f3032000000000000000000000000000000000000000000000000000000000000600082015250565b610f0681610d28565b8114610f1157600080fd5b50565b610f1d81610d3a565b8114610f2857600080fd5b50565b610f3481610d66565b8114610f3f57600080fd5b5056fea264697066735822122051af211b6d6aa5cf5fe39f74f710d405a90f83befb4c43ab53f7dddba3188a5c64736f6c63430008020033";

export class MultiSender__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MultiSender> {
    return super.deploy(overrides || {}) as Promise<MultiSender>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MultiSender {
    return super.attach(address) as MultiSender;
  }
  connect(signer: Signer): MultiSender__factory {
    return super.connect(signer) as MultiSender__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MultiSenderInterface {
    return new utils.Interface(_abi) as MultiSenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MultiSender {
    return new Contract(address, _abi, signerOrProvider) as MultiSender;
  }
}