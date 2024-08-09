/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import TitleSubtitleBody from "./TitleSubtitleBody";
import Info from "./Info";
import  ButtonGroupCustom from "./ButtonGroup";
import { View } from "@aws-amplify/ui-react";
export default function Samplecard2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="471px"
      height="193px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Samplecard2")}
      {...rest}
    >
      <TitleSubtitleBody
        display="flex"
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="31px"
        left="85px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "TitleSubtitleBody")}
      ></TitleSubtitleBody>
      <Info
        width="32px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="28px"
        left="22px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Info")}
      ></Info>
      <ButtonGroupCustom
        display="flex"
        gap="16px"
        direction="row"
        width="336px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="136px"
        left="76px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "ButtonGroup")}
      ></ButtonGroupCustom>
    </View>
  );
}
