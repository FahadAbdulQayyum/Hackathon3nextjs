'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store'

import { initializeCount } from '../lib/features/counter/counterSlice'


export default function StoreProvider({
    children
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<AppStore | null>(null)
    const count = 0; // Initialize count variable
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
        // storeRef.current.dispatch(initializeCount({ count }))
        storeRef.current.dispatch(initializeCount(count))
    }

    return <Provider store={storeRef.current}>{children}</Provider>
}