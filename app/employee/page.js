"use client"

import { useState, useCallback } from 'react';
import {
  Box,
  Heading,
  VStack,
  Button,
  useColorModeValue,
  SimpleGrid,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Text,
  HStack
} from '@chakra-ui/react';
import InsuranceCard from '../components/InsuranceCard';
import BigNumber from 'bignumber.js';

// 模拟的员工保单数据
const employeePolicies = [
  {
    employeeName: "张三",
    contractAddress: '0x1234567890123456789012345678901234567890',
    isContractActive: true,
    initialTime: Math.floor(Date.now() / 1000) - 365 * 24 * 60 * 60, // 1 year ago
    depositedToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC address
    monthlyContribution: new BigNumber(1000).shiftedBy(6).toString(), // 1000 USDC
    monthlyWithdrawal: new BigNumber(500).shiftedBy(6).toString(), // 500 USDC
    policyHolder: '0x9876543210987654321098765432109876543210',
    beneficiary: '0x1111111111111111111111111111111111111111',
    emergencyAddress: '0x2222222222222222222222222222222222222222',
    companyName: "科技有限公司"
  },
  {
    employeeName: "张三",
    contractAddress: '0x0987654321098765432109876543210987654321',
    isContractActive: false,
    initialTime: Math.floor(Date.now() / 1000) - 730 * 24 * 60 * 60, // 2 years ago
    depositedToken: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', // USDC address
    monthlyContribution: new BigNumber(800).shiftedBy(6).toString(), // 800 USDC
    monthlyWithdrawal: new BigNumber(400).shiftedBy(6).toString(), // 400 USDC
    policyHolder: '0x3333333333333333333333333333333333333333',
    beneficiary: '0x4444444444444444444444444444444444444444',
    emergencyAddress: '0x5555555555555555555555555555555555555555',
    companyName: "贸易有限公司"
  }
];

export default function EmployeePage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [socialSecurityInfo, setSocialSecurityInfo] = useState({
    enterpriseId: '',
    key: '',
    password: ''
  });

  const textColor = useColorModeValue('gray.800', 'white');
  const modalTextColor = "black";

  const handleInputChange = (e) => {
    setSocialSecurityInfo({ ...socialSecurityInfo, [e.target.name]: e.target.value });
  };

  // 生成随机密钥的函数
  const generateRandomKey = useCallback(() => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 20; // 你可以调整这个长度
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setSocialSecurityInfo(prevState => ({ ...prevState, key: result }));
  }, []);

  const handleGenerateSocialSecurityId = () => {
    // 这里应该是生成社保ID的逻辑
    console.log("生成社保ID", socialSecurityInfo);
    onClose();
  };

  // 模拟函数
  const mockFunction = () => console.log("Function called");
  const mockFormatAmount = (amount) => amount.toFixed(2);
  const mock_t = (cn, en) => cn; // 使用中文

  return (
    <Box className="container" py={8}>
      <VStack spacing={6} align="stretch">
        <Heading as="h1" size="2xl" color={textColor} textAlign="center">我的保单列表</Heading>
        <Button colorScheme="blue" onClick={onOpen} alignSelf="flex-end">
          生成社保ID
        </Button>
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={6}>
          {employeePolicies.map((policy, index) => (
            <InsuranceCard
              key={policy.contractAddress}
              insurance={policy}
              index={index}
              symbol="USDC"
              decimals={6}
              paidBalance={new BigNumber(policy.monthlyContribution).multipliedBy(12)} // 模拟已缴纳12个月
              toBePaidBalance={new BigNumber(0)} // 模拟无待缴纳金额
              withdrawableBalance={new BigNumber(policy.monthlyContribution).multipliedBy(12)} // 模拟可提取金额等于已缴纳金额
              startWithdrawTime={policy.initialTime + 365 * 24 * 60 * 60} // 一年后开始提取
              curAvailableFunds={new BigNumber(policy.monthlyWithdrawal)} // 模拟当前可用资金为一个月的提取金额
              walletAddress="0x1111111111111111111111111111111111111111" // 模拟当前钱包地址
              handleClaimFunds={mockFunction}
              handleDeposit={mockFunction}
              handleWithdrawBalance={mockFunction}
              handleConvertToYieldAsset={mockFunction}
              handleTerminatePolicy={mockFunction}
              handleCloseAccount={mockFunction}
              claimingFunds={false}
              withdrawing={false}
              terminatingPolicy={false}
              emergencyWithdrawing={false}
              formatAmount={mockFormatAmount}
              _t={mock_t}
            />
          ))}
        </SimpleGrid>
      </VStack>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader color={modalTextColor}>生成社保ID</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel color={modalTextColor}>企业ID</FormLabel>
              <Input 
                name="enterpriseId" 
                value={socialSecurityInfo.enterpriseId} 
                onChange={handleInputChange} 
                color={modalTextColor}
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={modalTextColor}>Key</FormLabel>
              <Input 
                name="key" 
                value={socialSecurityInfo.key} 
                color={modalTextColor}
                isReadOnly  // 设置为只读
                bg="gray.100"  // 添加背景色以表明这是只读的
                _placeholder={{ color: 'gray.500' }}
              />
              <HStack mt={2} spacing={2}>
                <Button onClick={generateRandomKey} size="sm">生成随机Key</Button>
                <Button onClick={() => navigator.clipboard.writeText(socialSecurityInfo.key)} size="sm">复制Key</Button>
              </HStack>
            </FormControl>
            <FormControl mt={4}>
              <FormLabel color={modalTextColor}>密码</FormLabel>
              <Input 
                name="password" 
                type="password" 
                value={socialSecurityInfo.password} 
                onChange={handleInputChange} 
                color={modalTextColor}
                _placeholder={{ color: 'gray.500' }}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleGenerateSocialSecurityId}>
              生成
            </Button>
            <Button variant="ghost" onClick={onClose}>取消</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
}
