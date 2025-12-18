'use client'

import { StableContractProvider, PYUSD_CONTRACT_ADDRESS, WallerProvider } from "@/shared/wallet";
import { FC, ReactNode } from "react";
import { QueryProvider } from "@/shared/http-client";

type ProvidersProps = {
    children?: ReactNode
}


export const Providers: FC<ProvidersProps> = (props) => {
    const { children } = props;

    return (
      <WallerProvider>
        <QueryProvider>
          <StableContractProvider
              contractAddress={PYUSD_CONTRACT_ADDRESS}
          >
            {children}
          </StableContractProvider>
        </QueryProvider>
      </WallerProvider>
    )
}