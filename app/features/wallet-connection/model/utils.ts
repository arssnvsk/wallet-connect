import { formatUnits } from "viem";

export const getFormattedBalance = (balance: {
    decimals: number
    value: bigint
}, options: {
    hidden?: boolean
} = {}) => options.hidden ? '**' : formatUnits(balance.value, balance.decimals)
