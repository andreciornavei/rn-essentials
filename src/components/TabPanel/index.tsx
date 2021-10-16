import React from "react"
import { View } from "react-native"
import { TabPanelHead } from "./components/TabPanelHead"
import { TabPanelProps } from "./types";
import PagerView from "react-native-pager-view";

export const TabPanel = (props: TabPanelProps) => {

    const tabHandler = React.useRef<PagerView>(null);
    const [selectedTabIndex, setSelectedTabIndex] = React.useState<number>(0);

    const handleChangeTabPanel = (newPageIndex: number) => {
        if (tabHandler.current)
            tabHandler.current.setPage(newPageIndex);
    }

    const _renderTab = React.useMemo(() => (
        <TabPanelHead
            {...props}
            onChange={handleChangeTabPanel}
            selectedTabIndex={selectedTabIndex}
        />
    ), [selectedTabIndex])

    const _renderPanel = React.useMemo(() => {
        return (
            <PagerView
                ref={tabHandler}
                style={{
                    flex: 1,
                    backgroundColor: props.backgroundColor,
                }}
                onPageSelected={({ nativeEvent }) => setSelectedTabIndex(nativeEvent.position)}
            >
                {props.tabs.map((tab, index) => (
                    <View key={`tabbed-panel-idx-${index}`}>
                        {selectedTabIndex == index && <tab.component />}
                    </View>
                ))}
            </PagerView>
        )
    }, [selectedTabIndex])

    return (
        <View style={{ flex: 1, backgroundColor: props.backgroundColor }}>
            {_renderTab}
            {_renderPanel}
        </View>
    )
}