"use client"

import { Eye, EyeOff } from "lucide-react"
import { Button } from "./button";
import { useState } from "react";

export const useToggle = () => {
    const [toggleValue, setToggleValue] = useState(false);

    const onToggle = () => {
        setToggleValue((prev) => !prev);
    }
    return {
        toggleValue,
        onToggle,
    }
}

type ToggleProps = {
    value: boolean
    onToggleAction: () => void
}

export const Toggle = (props: ToggleProps)=> {
    const { value, onToggleAction } = props
    return (
      <Button
            variant="ghost"
            size="icon"
            onClick={onToggleAction}
            aria-label={value ? "Show" : "Hide"}
      >
        {value ?  <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
      </Button>
    )
}
