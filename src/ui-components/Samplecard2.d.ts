/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TitleSubtitleBodyProps } from "./TitleSubtitleBody";
import { InfoProps } from "./Info";
import { ButtonGroupProps } from "./ButtonGroup";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Samplecard2OverridesProps = {
    Samplecard2?: PrimitiveOverrideProps<ViewProps>;
    TitleSubtitleBody?: TitleSubtitleBodyProps;
    Info?: InfoProps;
    ButtonGroup?: ButtonGroupProps;
} & EscapeHatchProps;
export declare type Samplecard2Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Samplecard2OverridesProps | undefined | null;
}>;
export default function Samplecard2(props: Samplecard2Props): React.ReactElement;
