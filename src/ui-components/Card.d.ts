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
export declare type CardOverridesProps = {
    Card?: PrimitiveOverrideProps<FlexProps>;
    Card574?: PrimitiveOverrideProps<FlexProps>;
    Info?: PrimitiveOverrideProps<ViewProps>;
    Icon?: PrimitiveOverrideProps<IconProps>;
    Body?: PrimitiveOverrideProps<FlexProps>;
    Text?: PrimitiveOverrideProps<FlexProps>;
    Title?: PrimitiveOverrideProps<TextProps>;
    "Body text for whatever you\u2019d like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story."?: PrimitiveOverrideProps<TextProps>;
    ButtonGroup?: PrimitiveOverrideProps<FlexProps>;
    Button5109?: PrimitiveOverrideProps<FlexProps>;
    Button5111?: PrimitiveOverrideProps<TextProps>;
    Button5119?: PrimitiveOverrideProps<FlexProps>;
    Button5121?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CardProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: CardOverridesProps | undefined | null;
}>;
export default function Card(props: CardProps): React.ReactElement;
