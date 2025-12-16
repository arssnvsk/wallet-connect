import { getFormattedBalance } from "../model";
import { Badge } from "@/shared/ui-kit/ui/badge";
import { FC } from "react";

type BalanceProps = {
    title: string;
    balance: {
        symbol: string;
        decimals: number;
        value: bigint;
    }
    hidden: boolean;
}

export const Balance: FC<BalanceProps> = (props) => {
    const { balance, hidden, title } = props
    return (
      <div className="flex items-center gap-1">{title}: ${getFormattedBalance(balance, { hidden })}
        <Badge variant="secondary" className="bg-blue-500 text-white dark:bg-blue-600">{balance.symbol}</Badge></div>
    );
};
