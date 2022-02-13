import React, { useMemo } from 'react';
import { IArticleItemProps, ArticleItemVariant } from './interfaces';

import { ArticleItemMobileBig } from './variants/article-item-mobile-big.component';
import { ArticleItemMobileFullWith } from './variants/article-item-mobile-full-width.component';
import { ArticleItemMobileSquare } from './variants/article-item-mobile-square.component';

export function ArticleItem({ variant, color, ...props }) {
  const Component = useMemo(() => {
    let Component;
    switch (variant) {
      case ArticleItemVariant.MobileBig:
        Component = ArticleItemMobileBig;
        break;
      case ArticleItemVariant.MobileFullWidth:
        Component = ArticleItemMobileFullWith;
        break;
      case ArticleItemVariant.MobileSquare:
        Component = ArticleItemMobileSquare;
        break;
      default:
        Component = ArticleItemMobileBig;
        break;
    }
    return Component;
  }, [variant]);

  return <Component {...props} color={color} />;
}