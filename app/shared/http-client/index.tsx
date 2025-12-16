import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { FC, ReactNode } from "react";

const queryClient = new QueryClient()

type QueryProviderProps = {
    children?: ReactNode
}

export const QueryProvider: FC<QueryProviderProps> = (props) => {
    const { children } = props;
    return (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    )
}