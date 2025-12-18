import { useReadContracts } from "wagmi";
import { erc20Abi } from "viem";

export const useTokenDecimals = (token: `0x${string}` | undefined): {
    decimals: number
} | undefined => {
    const { data } = useReadContracts({
        contracts: [
            {
                address: token,
                abi: erc20Abi,
                functionName: "decimals",
            },
        ],
        query: {
            enabled: !!token,
        },
    })
    const decimals = data?.[0]?.result

    if (decimals !== undefined ) {
        return { decimals }
    }
}