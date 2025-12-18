import { FC } from "react"
import Image from "next/image"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/shared/ui-kit/ui/card"
import { Button } from "@/shared/ui-kit/ui/button"
import { usePayment } from "../model";
import { Copy } from "@/shared/ui-kit/ui/copy";

type ProductProps = {
    title: string
    description?: string
    image?: string
    price: number
}

export const Product: FC<ProductProps> = (props) => {
    const {
        title,
        description,
        image,
        price,
    } = props

    const { onPay, error, hash } = usePayment()
    return (
      <Card className="w-full max-w-xs overflow-hidden gap-2">
        {image && (
        <div className="relative aspect-[4/3] w-full">
          <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              unoptimized
          />
        </div>
            )}

        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>

        <CardContent>
          {description && (
            <p className="text-sm text-muted-foreground">
              {description}
            </p>
                )}

          <div className="text-xl font-semibold">
            ${price}
          </div>
        </CardContent>
        <CardFooter>
          {!!hash && <div className="flex items-center gap-2 min-w-0">
            <span className="truncate min-w-0">
              Your tx hash is
            </span>
            <Copy value={hash} />
          </div>}
          {!!error && error}
          {!hash && !error && <Button className="w-full" onClick={() => onPay(price)}>
            Add to cart
            </Button>}
        </CardFooter>
      </Card>
    )
}
