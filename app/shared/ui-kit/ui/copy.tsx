"use client"

import { useState } from "react"
import { Button } from "./button"
import { Copy as CopyIcon, Check } from "lucide-react"

type CopyProps = {
    value: string
}

export function Copy({ value }: CopyProps) {
    const [copied, setCopied] = useState(false)

    const onCopy = async () => {
        try {
            await navigator.clipboard.writeText(value)
            setCopied(true)
            setTimeout(() => setCopied(false), 1500)
        } catch (e) {
            console.error("Copy failed", e)
        }
    }

    return (
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <span className="truncate min-w-0 max-w-fit flex-1">
          {value}
        </span>
        <Button
                variant="ghost"
                size="icon"
                onClick={onCopy}
                aria-label="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
                ) : (
                  <CopyIcon className="h-4 w-4" />
                )}
        </Button>
      </div>
    )
}
