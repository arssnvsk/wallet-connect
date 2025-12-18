"use client"

import { createContext, useContext, ReactNode, FC } from "react"

interface StableContractContextValue {
    contractAddress: `0x${string}`
}

const StableContractContext = createContext<
    StableContractContextValue | null
>(null)

type ContractProviderProps = {
    children: ReactNode,
    contractAddress: `0x${string}`
}

export const StableContractProvider: FC<ContractProviderProps> = (props) => {
    const { children, contractAddress } = props

    return (
      <StableContractContext.Provider value={{
          contractAddress
      }}
      >
        {children}
      </StableContractContext.Provider>
    )
}

export const useStableContract = () => {
    const context = useContext(StableContractContext)

    if (!context || !context.contractAddress) {
        throw new Error("Contract address is not set")
    }

    return context
}
