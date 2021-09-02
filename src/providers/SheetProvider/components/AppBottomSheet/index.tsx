import React from "react"
import { View } from "react-native"
import { AppBottomSheetContent } from "../AppBottomSheetContent"
import BottomSheet from "reanimated-bottom-sheet"
import { useSheet } from "../.."

export const AppBottomSheet = (): JSX.Element => {

    const { content, closeSheet, open } = useSheet()
    const sheetRef = React.useRef<BottomSheet>(null)

    React.useEffect(() => {
        if (sheetRef && open == true) sheetRef.current?.snapTo(0)
        if (sheetRef && open == false) sheetRef.current?.snapTo(1)
    }, [open])

    return (
        <>
            <BottomSheet
                ref={sheetRef}
                snapPoints={["100%", 0]}
                initialSnap={1}
                borderRadius={0}
                renderContent={() => (
                    <AppBottomSheetContent>
                        {content || <View />}
                    </AppBottomSheetContent>
                )}
                enabledContentTapInteraction={false}
                onCloseEnd={closeSheet}
            />
        </>
    );
}
