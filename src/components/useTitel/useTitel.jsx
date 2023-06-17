import { useEffect } from "react"

const useTitel = title => {
    useEffect( () => {
        document.title = `${title} - Job Task`
    }, [title])
}

export default useTitel