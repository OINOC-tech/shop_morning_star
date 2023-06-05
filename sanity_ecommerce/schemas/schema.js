import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import product from './product';
import banner from './banner';
import prodottiagricoli from './ProdottiAgricoli'
import articolinuovi from './articolinuovi';
import articoliusati from './articoliusati';
import atreazzaturetecniche from './atreazzaturetecniche';
import prodottivintage from './prodottivintage';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat(
    [product, banner, prodottiagricoli,
      prodottivintage, articolinuovi, articoliusati, atreazzaturetecniche]
  ),
})