/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type ButtonGroupOverridesProps = {
    ButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    Button713?: PrimitiveOverrideProps<FlexProps>;
    Star714?: PrimitiveOverrideProps<ViewProps>;
    Icon715?: PrimitiveOverrideProps<IconProps>;
    Button716?: PrimitiveOverrideProps<TextProps>;
    Button719?: PrimitiveOverrideProps<FlexProps>;
    Star720?: PrimitiveOverrideProps<ViewProps>;
    Icon721?: PrimitiveOverrideProps<IconProps>;
    Button722?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ButtonGroupProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ButtonGroupOverridesProps | undefined | null;
}>;
export default function ButtonGroup(props: ButtonGroupProps): React.ReactElement;
