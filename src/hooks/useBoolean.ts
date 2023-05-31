import { useState } from "react";

export function useBoolean() {
    const [value, setValue] = useState(false)

    return {
        value,
        toggle: () => setValue(!value)
    }
}