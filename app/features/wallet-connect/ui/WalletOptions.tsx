import { Button } from "@/shared/ui-kit/ui/button";
import { useWalletConnect } from "../model";


export function WalletOptions() {
const { connect, connectors } = useWalletConnect()

    return connectors.map((connector) => (
      <Button key={connector.uid} onClick={() => connect({ connector })}>
        {connector.name}
      </Button>
    ))
}