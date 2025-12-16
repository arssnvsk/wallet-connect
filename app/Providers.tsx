'use client'

import { WallerProvider } from "@/shared/wallet";
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
          {children}
        </QueryProvider>
      </WallerProvider>
    )
}