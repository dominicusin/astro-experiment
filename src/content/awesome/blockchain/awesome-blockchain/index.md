---
title: "awesome-blockchain"
description: "Курируемый awesome-список: awesome-blockchain"
layout: awesome/single
awesome_repo: "https://github.com/yjjnls/awesome-blockchain"
awesome_readme: "README.md"
---

> Источник: [awesome-blockchain](https://github.com/yjjnls/awesome-blockchain) — синхронизируется из внешнего репозитория как sparse-субмодуль (только список).


[![Awesome](https://awesome.re/badge.svg)](https://github.com/yjjnls/awesome-blockchain)

> Curated list of resources for the development and applications of block chain.

The blockchain is an incorruptible digital ledger of economic transactions that can be programmed to record not just financial transactions but virtually everything of value (by [Don Tapscott](https://www.linkedin.com/pulse/whats-next-generation-internet-surprise-its-all-don-tapscott)).

<font color=#0099ff size=3>**This is not a simple collection of Internet resources, but verified and organized data ensuring it's really suitable for your learning process and useful for your development and application.**</font>

## Contents
<details><summary>Click to expand</summary>

- [Awesome Blockchain](#awesome-blockchain)
  - [Contents](#contents)
  - [Frequently Asked Questions (F.A.Q.s) & Answers](#frequently-asked-questions-faqs--answers)
  - [Basic Introduction](#basic-introduction)
  - [Development Tutorial](#development-tutorial)
    - [BitCoin](#bitcoin)
    - [Ethereum](#ethereum)
    - [Consortium Blockchain](#consortium-blockchain)
      - [Hyperledger](#hyperledger)
      - [XuperChain](#xuperchain)
      - [FISCO-BCOS](#fisco-bcos)
  - [Releated Tools](#releated-tools)
    - [Solidity](#solidity)
    - [truffle](#truffle)
    - [web3.js](#web3js)
  - [Implementation of Blockchain](#implementation-of-blockchain)
  - [Projects and Applications](#projects-and-applications)
    - [Quorum](#quorum)
    - [Monero](#monero)
    - [IOTA](#iota)
    - [EOS](#eos)
    - [IPFS](#ipfs)
      - [Filecoin](#filecoin)
      - [BigchainDB](#bigchaindb)
    - [BitShares](#bitshares)
    - [ArcBlock](#arcblock)
  - [Further Extension](#further-extension)
    - [Papers](#papers)
    - [Books](#books)
    - [Applications](#applications)
      - [Identity Applications](#identity-applications)
        - [Public Blockchain Identity](#public-blockchain-identity)
        - [Blockchain as a collateral](#blockchain-as-a-collateral)
        - [Unclear](#unclear)
        - [Guidance](#guidance)
      - [Internet of Things Applications](#internet-of-things-applications)
      - [Energy Applications](#energy-applications)
      - [Media and Journalism](#media-and-journalism)
      - [DeFi (Decentralised Finance)](#defi-decentralised-finance)
    - [Roadmaps](#roadmaps)
  - [Contribute](#contribute)

</details>

## Frequently Asked Questions (F.A.Q.s) & Answers

**Q: What's a Blockchain?**

A: A blockchain is a distributed database with a list (that is, chain) of records (that is, blocks) linked and secured by
digital fingerprints (that is, crypto hashes).
Example from [`genesis_block.json`](https://github.com/yjjnls/awesome-blockchain/tree/master/src/js/genesis_block.json):

```js
{
    "version": 0,
    "height": 1,
    "previous_hash": null,
    "timestamp": 1550049140488,
    "merkle_hash": null,
    "generator_publickey": "18941c80a77f2150107cdde99486ba672b5279ddd469eeefed308540fbd46983",
    "hash": "d611edb9fd86ee234cdc08d9bf382330d6ccc721cd5e59cf2a01b0a2a8decfff",
    "block_signature": "603b61b14348fb7eb087fe3267e28abacadf3932f0e33958fb016ab60f825e3124bfe6c7198d38f8c91b0a3b1f928919190680e44fbe7289a4202039ffbb2109",
    "consensus_data": {},
    "transactions": []
}
```

![](https://github.com/yjjnls/awesome-blockchain/blob/main/Basic/img/blockchain-jesus.png)

**Q: What's a Hash? What's a (One-Way) Crypto(graphic) Hash Digest Checksum**?

A: A hash e.g. `d611edb9fd86ee234cdc08d9bf382330d6ccc721cd5e59cf2a01b0a2a8decfff`
is a small digest checksum calculated
with a one-way crypto(graphic) hash digest checksum function
e.g. SHA256 (Secure Hash Algorithm 256 Bits)
from the data. Example from [`crypto.js`](https://github.com/yjjnls/awesome-blockchain/blob/master/src/js/crypto.js):

```js
function calc_hash(data) {
    return crypto.createHash('sha256').update(data).digest('hex');
}
```

A blockchain uses

-   the block header (e.g. `Version`, `TimeStamp`, `Previous Hash...` )and
-   the block data (e.g. `Transaction Data...`)

to calculate the new hash digest checksum.

**Q: What's a Merkle Tree?**

A: A Merkle tree is a hash tree named after Ralph Merkle who patented the concept in 1979
(the patent expired in 2002). A hash tree is a generalization of hash lists or hash chains where every leaf node (in the tree) is labelled with a data block and every non-leaf node (in the tree)
is labelled with the crypto(graphic) hash of the labels of its child nodes. For more see the [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree) Wikipedia Article.

Note: By adding crypto(graphic) hash functions you can "merkelize" any data structure.

**Q: What's a Merkelized DAG (Directed Acyclic Graph)?**

A: It's a blockchain secured by crypto(graphic) hashes that uses a directed acyclic graph data structure (instead of linear "classic" linked list).

Note: Git uses merkelized dag (directed acyclic graph)s for its blockchains.

**Q: Is the Git Repo a Blockchain?**

A: Yes, every branch in the git repo is a blockchain.
The "classic" Satoshi-blockchain is like a git repo with a single master branch (only).

**More Q&A**
- [Blockchain Interview Questions](https://mindmajix.com/blockchain-interview-questions)
- [10 Essential Blockchain Interview Questions](https://www.toptal.com/blockchain/interview-questions)
- [Top 36 Blockchain Job Interview Questions & Answers](https://blockchainsfactory.com/blockchain-interview-questions/)

---
## Basic Introduction

<!--    
### Encryption knowledge
   -->

-   **Encryption knowledge**  
    * [Basic concepts](https://www.jianshu.com/p/a044b303f7d5) - Asymmetric encryption, Digital signature, Certificate  
    * [Digital signature extension](https://www.jianshu.com/p/410e77ec23fa)  - Multi-signature, Blind signature, Group signature, Ring signature
    * [Merkle tree](https://www.jianshu.com/p/a044b303f7d5)  
    <!-- * [Merkle tree in blockchain](https://github.com/yjjnls/awesome-blockchain/blob/main/Basic/merkle_tree_in_blockchain.md)   -->
    * [Merkle DAG](http://www.sohu.com/a/247540268_100222281)   
    * [**CryptoNote v2.0**](https://cryptonote.org/whitepaper.pdf) - Untraceable Transactions and Egalitarian Proof-of-work
<!--   
### Consensus
    -->
-   **Consensus**  
    * [Proof of Work](https://www.jianshu.com/p/3462f2ed74d7)
    * [Proof of Stake](https://www.jianshu.com/p/2fd3bce523b0)
    * [Proof of Stake FAQs](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs) / [Chinese version](https://ethfans.org/posts/Proof-of-Stake-FAQ-new-2018-3-15)
    * [Delegated Proof of Stake](https://www.jianshu.com/p/ccc3fff7a60d)
    * [Practical Byzantine Fault Tolerance](https://www.jianshu.com/p/e991c1385f9f)

<!--    
### Account and transaction model
    -->
-   **Account and transaction model**  
    * [UTXO model](https://www.jianshu.com/p/2f4e75dbc2e4)
<!--
### Exchange
    -->
-   **Exchange**  
<!--
### Applications
    -->
-   **Applications**  
    * [Do You Need a Blockchain?](https://spectrum.ieee.org/computing/networks/do-you-need-a-blockchain)  
    * [What can't blockchain do?](https://www.jianshu.com/p/70f6a29a6296)  
    * [More](https://github.com/yjjnls/awesome-blockchain/blob/main/Extension/application.md)
<!--     
### Governance
    -->
-   **Governance**
    * [Blockchains should not be democracies](https://haseebq.com/blockchains-should-not-be-democracies/)                                       
<!-- * [](https://github.com/yfeng125/blockchain-tutorial/blob/master/doc/%E2%80%8B25.%E6%AF%94%E7%89%B9%E5%B8%81%EF%BC%9A%E6%89%A9%E5%AE%B9%E4%B9%8B%E4%BA%89%E3%80%81IFO%E4%B8%8E%E9%93%BE%E4%B8%8A%E6%B2%BB%E7%90%86.md)   -->


<!--     
### Digital currency ranking
    -->
-   **[Digital currency ranking](https://coinmarketcap.com/)**   

---
## Development Tutorial

### [BitCoin](https://github.com/bitcoin/bitcoin)

[<img src="https://bitcoin.org/img/icons/logotop.svg" align="right" width="120">](https://bitcoincore.org)

**Bitcoin** is an experimental digital currency that enables instant payments to anyone, anywhere in the world. Bitcoin uses **peer-to-peer** technology to **operate with no central authority**: managing transactions and issuing money are carried out collectively by the network.

-   [BitCoin white paper: A Peer-to-Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf) / [Chinese version](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/white%20paper.md) / [Annotated BitCoin white paper](https://fermatslibrary.com/s/bitcoin)
-   [Mastering BitCoin](https://github.com/bitcoinbook/bitcoinbook) / [Chinese version](http://book.8btc.com/books/6/masterbitcoin2cn/_book/) / [pdf download](http://book.8btc.com/master_bitcoin?export=pdf)
-   [Bitcoin Improvement Proposals (BIPs)](https://github.com/bitcoin/bips/)

+   [But how does bitcoin actually work?](https://www.youtube.com/watch?v=bBC-nXj3Ng4)
+   [Mining visualization](http://www.yogh.io/#mine:last)
+   [Wallets](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/awesome.md#wallets-api#wallets-api)
+   [Explorers](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/awesome.md#blockchain-explorers#blockchain-explorers)
+   [Libraries](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/awesome.md#libraries#libraries) - C++, JavaScript, PHP, Ruby, Python, Java, .Net
+   [Web services](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/awesome.md#blockchain-api-and-web-services#blockchain-api-and-web-services)
+   [Full nodes](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/awesome.md#full-nodes#full-nodes)
+   [More](https://github.com/yjjnls/awesome-blockchain/blob/main/BitCoin/awesome.md)

### [Ethereum](https://github.com/ethereum)

[<img src="https://github.com/yjjnls/Notes/blob/master/img/ethereum.png" align="right" width="80">](https://www.ethereum.org/)

**Ethereum** is a **decentralized platform that runs smart contracts**: applications that run exactly as programmed without any possibility of downtime, censorship, fraud or third-party interference.

These apps run on a custom built **blockchain, an enormously powerful shared global infrastructure that can move value around and represent the ownership of property.**


-   [Ethereum white paper](https://github.com/ethereum/wiki/wiki/White-Paper) / [Chinese version](https://github.com/yjjnls/awesome-blockchain/blob/main/Ethereum/white%20paper.md) / [Annotated Ethereum white paper](https://fermatslibrary.com/s/ethereum-a-next-generation-smart-contract-and-decentralized-application-platform)
-   [Mastering Ethereum](https://github.com/ethereumbook/ethereumbook) / [Chinese version](https://github.com/inoutcode/ethereum_book)
-   [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf) / [Chinese version](https://github.com/yuange1024/ethereum_yellowpaper)
-   [Ethereum wiki](https://github.com/ethereum/wiki/wiki)
    -   [Ethereum Design Rationale](https://github.com/ethereum/wiki/wiki/Design-Rationale) / [Chinese version](https://ethfans.org/posts/510)
    -   [Ethereum problems](https://github.com/ethereum/wiki/wiki/Problems)
    -   [Sharding roadmap](https://github.com/ethereum/wiki/wiki/Sharding-roadmap)
    -   [**Ethereum flavored WebAssembly (ewasm)**](https://github.com/ewasm)
    -   [ÐΞVp2p Wire Protocol](https://github.com/ethereum/wiki/wiki/%C3%90%CE%9EVp2p-Wire-Protocol)
    -   [EVM-Awesome-List](https://github.com/ethereum/wiki/wiki/Ethereum-Virtual-Machine-(EVM)-Awesome-List)
    -   [Patricia Tree](https://github.com/ethereum/wiki/wiki/Patricia-Tree)
    -   Consensus
        -   [Ethash](https://github.com/ethereum/wiki/wiki/Ethash)
        -   [Ethash-DAG](https://github.com/ethereum/wiki/wiki/Ethash-DAG)
        -   [Ethash Specification](https://github.com/ethereum/wiki/wiki/Ethash)
        -   [Mining Ethash DAG](https://github.com/ethereum/wiki/wiki/Mining#ethash-dag)
        -   [Dagger-Hashimoto Algorithm](https://github.com/ethereum/wiki/blob/master/Dagger-Hashimoto.md)
        -   [DAG Explanation and Images](https://ethereum.stackexchange.com/questions/1993/what-actually-is-a-dag)
        -   [Ethash in Ethereum Yellowpaper](https://ethereum.github.io/yellowpaper/paper.pdf#appendix.J)
        -   [Ethash C API Example Usage](https://github.com/ethereum/wiki/wiki/Ethash-C-API)
-   [Accounts, Transactions, Gas, and Block Gas Limits in Ethereum](https://hudsonjameson.com/2017-06-27-accounts-transactions-gas-ethereum/)
-   [Ethereum Improvement Proposals](https://eips.ethereum.org/)
-   [Important EIPs and ERCs](https://github.com/ethereumbook/ethereumbook/blob/develop/appdx-standards-eip-erc.asciidoc#table-of-most-important-eips-and-ercs) / [EIP list](https://github.com/ethereum/EIPs)
-   Security
    -   [Ethereum Smart Contract Security Best Practices](https://consensys.github.io/smart-contract-best-practices/) / [Chinese version](https://github.com/ConsenSys/smart-contract-best-practices/blob/master/README-zh.md)
    -   [Onward with Ethereum Smart Contract Security](https://blog.zeppelin.solutions/onward-with-ethereum-smart-contract-security-97a827e47702)
    -   [The Hitchhiker's Guide to Smart Contracts in Ethereum](https://blog.zeppelin.solutions/the-hitchhikers-guide-to-smart-contracts-in-ethereum-848f08001f05)
    -   [**OpenZeppelin**](https://docs.openzeppelin.com/openzeppelin/)
    -   [**openzeppelin contracts**](https://github.com/OpenZeppelin/openzeppelin-contracts) / [doc](https://docs.openzeppelin.com/contracts/2.x/)
    -   [openzepplin sdk](https://github.com/OpenZeppelin/openzeppelin-sdk)
-   Token
    -   [ERC20](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md) / [impl](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC20)
    -   [ERC721](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-721.md) / [impl](https://github.com/OpenZeppelin/openzeppelin-contracts/tree/master/contracts/token/ERC721)

+   Utils
    +   [Ethereum Blockchain Explorer](https://etherscan.io/)
    +   [Eth Gas Station](https://ethgasstation.info/)
    +   [Eth Network Status](https://ethstats.net/)
    

-   [**EEA** - Enterprise Ethereum: Private Blockchain For Enterprises](https://101blockchains.com/enterprise-ethereum/)
    -   [What Is Enterprise Ethereum?](https://101blockchains.com/enterprise-ethereum/#1)
    -   [What is The Enterprise Ethereum alliance?](https://101blockchains.com/enterprise-ethereum/#2)
    -   [Benefits of Enterprise Ethereum](https://101blockchains.com/enterprise-ethereum/#3)
    -   [Architecture Stack of the Enterprise Ethereum Blockchain](https://101blockchains.com/enterprise-ethereum/#4)
    -   [What Are The Possible Enterprise Ethereum Use Cases?](https://101blockchains.com/enterprise-ethereum/#5)
    -   [Ethereum Blockchain as a Service Providers](https://101blockchains.com/enterprise-ethereum/#6)
    -   [Real-World Companies Using Enterprise Ethereum](https://101blockchains.com/enterprise-ethereum/#7)
    -   [Final Words](https://101blockchains.com/enterprise-ethereum/#8)

_…превью ограничено; полный список — в репозитории._
