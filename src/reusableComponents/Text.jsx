import React from 'react';
import { Text as NativeText, StyleSheet } from 'react-native';

import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
    lineHeight: theme.lineHeights.normal
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },  
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  lineHeightSmall: {
    lineHeight: theme.lineHeights.small,
  },
  lineHeightMedium: {
    lineHeight: theme.lineHeights.medium,
  },
  lineHeightHigh: {
    lineHeight: theme.lineHeights.high,
  },
});

const Text = ({ color, fontSize, fontWeight, lineHeight, align, style, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'textSecondary' && styles.colorTextSecondary,
    color === 'primary' && styles.colorPrimary,
    color === 'white' && styles.colorWhite,
    fontSize === 'subheading' && styles.fontSizeSubheading,
    fontWeight === 'bold' && styles.fontWeightBold,
    align === 'center' && { textAlign: 'center' },
    lineHeight === 'small' && styles.lineHeightSmall,
    lineHeight === 'medium' && styles.lineHeightMedium,
    lineHeight === 'high' && styles.lineHeightHigh,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};

export default Text;