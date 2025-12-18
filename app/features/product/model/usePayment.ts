import { useWriteContract } from "wagmi";
import { sepolia } from "wagmi/chains";
import { useStableContract } from "@/shared/wallet";
import { parseUnits } from "viem";
import { useTokenDecimals } from "@/shared/wallet";
import { useState } from "react";

export const usePayment = () => {
    const [hash, setHash] = useState("");
    const [error, setError] = useState("");
    const { contractAddress } = useStableContract()
    const tokenDecimals = useTokenDecimals(contractAddress)

    const writeContract = useWriteContract()
    const onPay = async (price: number) => {
        if (!tokenDecimals) {
            setError("Token Decimals should be defined");
            return
        }
        setHash('')
        setError("")
        try {
            const amount = parseUnits(price.toString(), tokenDecimals?.decimals)
            const hash = await writeContract.mutateAsync({
                chainId: sepolia.id,
                address: contractAddress,
                functionName: 'transfer',
                abi: [
                    {
                        type: "function",
                        name: "transfer",
                        stateMutability: "nonpayable",
                        inputs: [
                            { name: "to", type: "address" },
                            { name: "amount", type: "uint256" },
                        ],
                        outputs: [{ type: "bool" }],
                    },
                    {
                        type: "function",
                        name: "balanceOf",
                        stateMutability: "view",
                        inputs: [{ name: "owner", type: "address" }],
                        outputs: [{ type: "uint256" }],
                    },
                    {
                        type: "function",
                        name: "decimals",
                        stateMutability: "view",
                        inputs: [],
                        outputs: [{ type: "uint8" }],
                    },
                ],
                args: [
                    '0x0AdB24fd4caaeF3464c98c0FC417426417E9CE49',
                    amount,
                ],
            })
            setHash(hash)
        } catch (error) {
            setError('Payment failed');
            console.error(error);
        }
    }

    return {
        onPay,
        error,
        hash,
    }
}