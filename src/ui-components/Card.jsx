/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function Card(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Card")}
      {...rest}
    >
      <Flex
        gap="24px"
        direction="row"
        width="440px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(217,217,217,1)"
        borderRadius="8px"
        padding="23px 23px 23px 23px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Card574")}
      >
        <View
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Info")}
        >
          <Icon
            width="26.67px"
            height="26.67px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 26.666667938232422,
              height: 26.666667938232422,
            }}
            paths={[
              {
                d: "M11.8333 18.6667C11.8333 19.4951 12.5049 20.1667 13.3333 20.1667C14.1618 20.1667 14.8333 19.4951 14.8333 18.6667L11.8333 18.6667ZM14.8333 13.3333C14.8333 12.5049 14.1618 11.8333 13.3333 11.8333C12.5049 11.8333 11.8333 12.5049 11.8333 13.3333L14.8333 13.3333ZM13.3333 6.5C12.5049 6.5 11.8333 7.17157 11.8333 8C11.8333 8.82843 12.5049 9.5 13.3333 9.5L13.3333 6.5ZM13.3467 9.5C14.1751 9.5 14.8467 8.82843 14.8467 8C14.8467 7.17157 14.1751 6.5 13.3467 6.5L13.3467 9.5ZM25.1667 13.3333C25.1667 19.8687 19.8687 25.1667 13.3333 25.1667L13.3333 28.1667C21.5256 28.1667 28.1667 21.5256 28.1667 13.3333L25.1667 13.3333ZM13.3333 25.1667C6.79796 25.1667 1.5 19.8687 1.5 13.3333L-1.5 13.3333C-1.5 21.5256 5.14111 28.1667 13.3333 28.1667L13.3333 25.1667ZM1.5 13.3333C1.5 6.79796 6.79796 1.5 13.3333 1.5L13.3333 -1.5C5.14111 -1.5 -1.5 5.14111 -1.5 13.3333L1.5 13.3333ZM13.3333 1.5C19.8687 1.5 25.1667 6.79796 25.1667 13.3333L28.1667 13.3333C28.1667 5.14111 21.5256 -1.5 13.3333 -1.5L13.3333 1.5ZM14.8333 18.6667L14.8333 13.3333L11.8333 13.3333L11.8333 18.6667L14.8333 18.6667ZM13.3333 9.5L13.3467 9.5L13.3467 6.5L13.3333 6.5L13.3333 9.5Z",
                stroke: "rgba(30,30,30,1)",
                fillRule: "nonzero",
                strokeLinejoin: "round",
                strokeWidth: 3,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="8.33%"
            bottom="8.33%"
            left="8.33%"
            right="8.33%"
            {...getOverrideProps(overrides, "Icon")}
          ></Icon>
        </View>
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Body")}
        >
          <Flex
            gap="8px"
            direction="column"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Text")}
          >
            <Text
              fontFamily="Inter"
              fontSize="24px"
              fontWeight="600"
              color="rgba(30,30,30,1)"
              lineHeight="28.80000114440918px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="-0.33px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Title"
              {...getOverrideProps(overrides, "Title")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(117,117,117,1)"
              lineHeight="22.399999618530273px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Body text for whatever you’d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story. "
              {...getOverrideProps(
                overrides,
                "Body text for whatever you\u2019d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."
              )}
            ></Text>
          </Flex>
          <Flex
            gap="16px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "ButtonGroup")}
          >
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              borderRadius="8px"
              padding="12px 12px 12px 12px"
              {...getOverrideProps(overrides, "Button5109")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(48,48,48,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Button"
                {...getOverrideProps(overrides, "Button5111")}
              ></Text>
            </Flex>
            <Flex
              gap="8px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              overflow="hidden"
              shrink="0"
              position="relative"
              border="1px SOLID rgba(118,118,118,1)"
              borderRadius="8px"
              padding="11px 11px 11px 11px"
              backgroundColor="rgba(227,227,227,1)"
              {...getOverrideProps(overrides, "Button5119")}
            >
              <Text
                fontFamily="Inter"
                fontSize="16px"
                fontWeight="400"
                color="rgba(30,30,30,1)"
                lineHeight="16px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="Button"
                {...getOverrideProps(overrides, "Button5121")}
              ></Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
