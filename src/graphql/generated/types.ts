import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * The `Date` scalar type represents a Date
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  Date: any;
  /**
   * The `DateTime` scalar type represents a DateTime
   * value as specified by
   * [iso8601](https://en.wikipedia.org/wiki/ISO_8601).
   */
  DateTime: any;
  /** The `Decimal` scalar type represents a python Decimal. */
  Decimal: any;
  /**
   * The `GenericScalar` scalar type represents a generic
   * GraphQL scalar value that could be:
   * String, Boolean, Int, Float, List or Object.
   */
  GenericScalar: any;
};

export type AddressInput = {
  line1: Scalars['String'];
  line2?: Maybe<Scalars['String']>;
  city: Scalars['String'];
  zip: Scalars['Int'];
  state: Scalars['String'];
  country: Scalars['String'];
};

export type AddressType = {
  __typename?: 'AddressType';
  id: Scalars['ID'];
  name: Scalars['String'];
  address1: Scalars['String'];
  address2: Scalars['String'];
  city: Scalars['String'];
  state: CustomerAddressStateChoices;
  zipCode: Scalars['String'];
  country: CustomerAddressCountryChoices;
};

export type AllVariantsType = WheelVariantType | TireVariantType;

export type CategoryType = {
  __typename?: 'CategoryType';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CloudinaryImageType = {
  __typename?: 'CloudinaryImageType';
  id: Scalars['String'];
  format?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  url: Scalars['String'];
};

export type CreateAddress = {
  __typename?: 'CreateAddress';
  success?: Maybe<Scalars['Boolean']>;
  address?: Maybe<AddressType>;
};

export type CreateCustomer = {
  __typename?: 'CreateCustomer';
  customer?: Maybe<CustomerType>;
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
};

export type CreateOrder = {
  __typename?: 'CreateOrder';
  status?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  orderItems?: Maybe<Array<OrderItemResponseType>>;
};

/** An enumeration. */
export enum CustomerAddressCountryChoices {
  /** Andorra */
  Ad = 'AD',
  /** United Arab Emirates */
  Ae = 'AE',
  /** Afghanistan */
  Af = 'AF',
  /** Antigua & Barbuda */
  Ag = 'AG',
  /** Anguilla */
  Ai = 'AI',
  /** Albania */
  Al = 'AL',
  /** Armenia */
  Am = 'AM',
  /** Netherlands Antilles */
  An = 'AN',
  /** Angola */
  Ao = 'AO',
  /** Antarctica */
  Aq = 'AQ',
  /** Argentina */
  Ar = 'AR',
  /** American Samoa */
  As = 'AS',
  /** Austria */
  At = 'AT',
  /** Australia */
  Au = 'AU',
  /** Aruba */
  Aw = 'AW',
  /** Azerbaijan */
  Az = 'AZ',
  /** Bosnia and Herzegovina */
  Ba = 'BA',
  /** Barbados */
  Bb = 'BB',
  /** Bangladesh */
  Bd = 'BD',
  /** Belgium */
  Be = 'BE',
  /** Burkina Faso */
  Bf = 'BF',
  /** Bulgaria */
  Bg = 'BG',
  /** Bahrain */
  Bh = 'BH',
  /** Burundi */
  Bi = 'BI',
  /** Benin */
  Bj = 'BJ',
  /** Bermuda */
  Bm = 'BM',
  /** Brunei Darussalam */
  Bn = 'BN',
  /** Bolivia */
  Bo = 'BO',
  /** Brazil */
  Br = 'BR',
  /** Bahama */
  Bs = 'BS',
  /** Bhutan */
  Bt = 'BT',
  /** Bouvet Island */
  Bv = 'BV',
  /** Botswana */
  Bw = 'BW',
  /** Belarus */
  By = 'BY',
  /** Belize */
  Bz = 'BZ',
  /** Canada */
  Ca = 'CA',
  /** Cocos (Keeling) Islands */
  Cc = 'CC',
  /** Central African Republic */
  Cf = 'CF',
  /** Congo */
  Cg = 'CG',
  /** Switzerland */
  Ch = 'CH',
  /** Ivory Coast */
  Ci = 'CI',
  /** Cook Iislands */
  Ck = 'CK',
  /** Chile */
  Cl = 'CL',
  /** Cameroon */
  Cm = 'CM',
  /** China */
  Cn = 'CN',
  /** Colombia */
  Co = 'CO',
  /** Costa Rica */
  Cr = 'CR',
  /** Cuba */
  Cu = 'CU',
  /** Cape Verde */
  Cv = 'CV',
  /** Christmas Island */
  Cx = 'CX',
  /** Cyprus */
  Cy = 'CY',
  /** Czech Republic */
  Cz = 'CZ',
  /** Germany */
  De = 'DE',
  /** Djibouti */
  Dj = 'DJ',
  /** Denmark */
  Dk = 'DK',
  /** Dominica */
  Dm = 'DM',
  /** Dominican Republic */
  Do = 'DO',
  /** Algeria */
  Dz = 'DZ',
  /** Ecuador */
  Ec = 'EC',
  /** Estonia */
  Ee = 'EE',
  /** Egypt */
  Eg = 'EG',
  /** Western Sahara */
  Eh = 'EH',
  /** Eritrea */
  Er = 'ER',
  /** Spain */
  Es = 'ES',
  /** Ethiopia */
  Et = 'ET',
  /** Finland */
  Fi = 'FI',
  /** Fiji */
  Fj = 'FJ',
  /** Falkland Islands (Malvinas) */
  Fk = 'FK',
  /** Micronesia */
  Fm = 'FM',
  /** Faroe Islands */
  Fo = 'FO',
  /** France */
  Fr = 'FR',
  /** France, Metropolitan */
  Fx = 'FX',
  /** Gabon */
  Ga = 'GA',
  /** United Kingdom (Great Britain) */
  Gb = 'GB',
  /** Grenada */
  Gd = 'GD',
  /** Georgia */
  Ge = 'GE',
  /** French Guiana */
  Gf = 'GF',
  /** Ghana */
  Gh = 'GH',
  /** Gibraltar */
  Gi = 'GI',
  /** Greenland */
  Gl = 'GL',
  /** Gambia */
  Gm = 'GM',
  /** Guinea */
  Gn = 'GN',
  /** Guadeloupe */
  Gp = 'GP',
  /** Equatorial Guinea */
  Gq = 'GQ',
  /** Greece */
  Gr = 'GR',
  /** South Georgia and the South Sandwich Islands */
  Gs = 'GS',
  /** Guatemala */
  Gt = 'GT',
  /** Guam */
  Gu = 'GU',
  /** Guinea-Bissau */
  Gw = 'GW',
  /** Guyana */
  Gy = 'GY',
  /** Hong Kong */
  Hk = 'HK',
  /** Heard & McDonald Islands */
  Hm = 'HM',
  /** Honduras */
  Hn = 'HN',
  /** Croatia */
  Hr = 'HR',
  /** Haiti */
  Ht = 'HT',
  /** Hungary */
  Hu = 'HU',
  /** Indonesia */
  Id = 'ID',
  /** Ireland */
  Ie = 'IE',
  /** Israel */
  Il = 'IL',
  /** India */
  In = 'IN',
  /** British Indian Ocean Territory */
  Io = 'IO',
  /** Iraq */
  Iq = 'IQ',
  /** Islamic Republic of Iran */
  Ir = 'IR',
  /** Iceland */
  Is = 'IS',
  /** Italy */
  It = 'IT',
  /** Jamaica */
  Jm = 'JM',
  /** Jordan */
  Jo = 'JO',
  /** Japan */
  Jp = 'JP',
  /** Kenya */
  Ke = 'KE',
  /** Kyrgyzstan */
  Kg = 'KG',
  /** Cambodia */
  Kh = 'KH',
  /** Kiribati */
  Ki = 'KI',
  /** Comoros */
  Km = 'KM',
  /** St. Kitts and Nevis */
  Kn = 'KN',
  /** Korea, Democratic People's Republic of */
  Kp = 'KP',
  /** Korea, Republic of */
  Kr = 'KR',
  /** Kuwait */
  Kw = 'KW',
  /** Cayman Islands */
  Ky = 'KY',
  /** Kazakhstan */
  Kz = 'KZ',
  /** Lao People's Democratic Republic */
  La = 'LA',
  /** Lebanon */
  Lb = 'LB',
  /** Saint Lucia */
  Lc = 'LC',
  /** Liechtenstein */
  Li = 'LI',
  /** Sri Lanka */
  Lk = 'LK',
  /** Liberia */
  Lr = 'LR',
  /** Lesotho */
  Ls = 'LS',
  /** Lithuania */
  Lt = 'LT',
  /** Luxembourg */
  Lu = 'LU',
  /** Latvia */
  Lv = 'LV',
  /** Libyan Arab Jamahiriya */
  Ly = 'LY',
  /** Morocco */
  Ma = 'MA',
  /** Monaco */
  Mc = 'MC',
  /** Moldova, Republic of */
  Md = 'MD',
  /** Madagascar */
  Mg = 'MG',
  /** Marshall Islands */
  Mh = 'MH',
  /** Mali */
  Ml = 'ML',
  /** Mongolia */
  Mn = 'MN',
  /** Myanmar */
  Mm = 'MM',
  /** Macau */
  Mo = 'MO',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Martinique */
  Mq = 'MQ',
  /** Mauritania */
  Mr = 'MR',
  /** Monserrat */
  Ms = 'MS',
  /** Malta */
  Mt = 'MT',
  /** Mauritius */
  Mu = 'MU',
  /** Maldives */
  Mv = 'MV',
  /** Malawi */
  Mw = 'MW',
  /** Mexico */
  Mx = 'MX',
  /** Malaysia */
  My = 'MY',
  /** Mozambique */
  Mz = 'MZ',
  /** Namibia */
  Na = 'NA',
  /** New Caledonia */
  Nc = 'NC',
  /** Niger */
  Ne = 'NE',
  /** Norfolk Island */
  Nf = 'NF',
  /** Nigeria */
  Ng = 'NG',
  /** Nicaragua */
  Ni = 'NI',
  /** Netherlands */
  Nl = 'NL',
  /** Norway */
  No = 'NO',
  /** Nepal */
  Np = 'NP',
  /** Nauru */
  Nr = 'NR',
  /** Niue */
  Nu = 'NU',
  /** New Zealand */
  Nz = 'NZ',
  /** Oman */
  Om = 'OM',
  /** Panama */
  Pa = 'PA',
  /** Peru */
  Pe = 'PE',
  /** French Polynesia */
  Pf = 'PF',
  /** Papua New Guinea */
  Pg = 'PG',
  /** Philippines */
  Ph = 'PH',
  /** Pakistan */
  Pk = 'PK',
  /** Poland */
  Pl = 'PL',
  /** St. Pierre & Miquelon */
  Pm = 'PM',
  /** Pitcairn */
  Pn = 'PN',
  /** Puerto Rico */
  Pr = 'PR',
  /** Portugal */
  Pt = 'PT',
  /** Palau */
  Pw = 'PW',
  /** Paraguay */
  Py = 'PY',
  /** Qatar */
  Qa = 'QA',
  /** Reunion */
  Re = 'RE',
  /** Romania */
  Ro = 'RO',
  /** Russian Federation */
  Ru = 'RU',
  /** Rwanda */
  Rw = 'RW',
  /** Saudi Arabia */
  Sa = 'SA',
  /** Solomon Islands */
  Sb = 'SB',
  /** Seychelles */
  Sc = 'SC',
  /** Sudan */
  Sd = 'SD',
  /** Sweden */
  Se = 'SE',
  /** Singapore */
  Sg = 'SG',
  /** St. Helena */
  Sh = 'SH',
  /** Slovenia */
  Si = 'SI',
  /** Svalbard & Jan Mayen Islands */
  Sj = 'SJ',
  /** Slovakia */
  Sk = 'SK',
  /** Sierra Leone */
  Sl = 'SL',
  /** San Marino */
  Sm = 'SM',
  /** Senegal */
  Sn = 'SN',
  /** Somalia */
  So = 'SO',
  /** Suriname */
  Sr = 'SR',
  /** Sao Tome & Principe */
  St = 'ST',
  /** El Salvador */
  Sv = 'SV',
  /** Syrian Arab Republic */
  Sy = 'SY',
  /** Swaziland */
  Sz = 'SZ',
  /** Turks & Caicos Islands */
  Tc = 'TC',
  /** Chad */
  Td = 'TD',
  /** French Southern Territories */
  Tf = 'TF',
  /** Togo */
  Tg = 'TG',
  /** Thailand */
  Th = 'TH',
  /** Tajikistan */
  Tj = 'TJ',
  /** Tokelau */
  Tk = 'TK',
  /** Turkmenistan */
  Tm = 'TM',
  /** Tunisia */
  Tn = 'TN',
  /** Tonga */
  To = 'TO',
  /** East Timor */
  Tp = 'TP',
  /** Turkey */
  Tr = 'TR',
  /** Trinidad & Tobago */
  Tt = 'TT',
  /** Tuvalu */
  Tv = 'TV',
  /** Taiwan, Province of China */
  Tw = 'TW',
  /** Tanzania, United Republic of */
  Tz = 'TZ',
  /** Ukraine */
  Ua = 'UA',
  /** Uganda */
  Ug = 'UG',
  /** United States Minor Outlying Islands */
  Um = 'UM',
  /** United States of America */
  Us = 'US',
  /** Uruguay */
  Uy = 'UY',
  /** Uzbekistan */
  Uz = 'UZ',
  /** Vatican City State (Holy See) */
  Va = 'VA',
  /** St. Vincent & the Grenadines */
  Vc = 'VC',
  /** Venezuela */
  Ve = 'VE',
  /** British Virgin Islands */
  Vg = 'VG',
  /** United States Virgin Islands */
  Vi = 'VI',
  /** Viet Nam */
  Vn = 'VN',
  /** Vanuatu */
  Vu = 'VU',
  /** Wallis & Futuna Islands */
  Wf = 'WF',
  /** Samoa */
  Ws = 'WS',
  /** Yemen */
  Ye = 'YE',
  /** Mayotte */
  Yt = 'YT',
  /** Yugoslavia */
  Yu = 'YU',
  /** South Africa */
  Za = 'ZA',
  /** Zambia */
  Zm = 'ZM',
  /** Zaire */
  Zr = 'ZR',
  /** Zimbabwe */
  Zw = 'ZW',
  /** Unknown or unspecified country */
  Zz = 'ZZ'
}

/** An enumeration. */
export enum CustomerAddressStateChoices {
  /** Alabama */
  Al = 'AL',
  /** Alaska */
  Ak = 'AK',
  /** American Samoa */
  As = 'AS',
  /** Arizona */
  Az = 'AZ',
  /** Arkansas */
  Ar = 'AR',
  /** California */
  Ca = 'CA',
  /** Colorado */
  Co = 'CO',
  /** Connecticut */
  Ct = 'CT',
  /** Delaware */
  De = 'DE',
  /** District of Columbia */
  Dc = 'DC',
  /** Florida */
  Fl = 'FL',
  /** Georgia */
  Ga = 'GA',
  /** Guam */
  Gu = 'GU',
  /** Hawaii */
  Hi = 'HI',
  /** Idaho */
  Id = 'ID',
  /** Illinois */
  Il = 'IL',
  /** Indiana */
  In = 'IN',
  /** Iowa */
  Ia = 'IA',
  /** Kansas */
  Ks = 'KS',
  /** Kentucky */
  Ky = 'KY',
  /** Louisiana */
  La = 'LA',
  /** Maine */
  Me = 'ME',
  /** Maryland */
  Md = 'MD',
  /** Massachusetts */
  Ma = 'MA',
  /** Michigan */
  Mi = 'MI',
  /** Minnesota */
  Mn = 'MN',
  /** Mississippi */
  Ms = 'MS',
  /** Missouri */
  Mo = 'MO',
  /** Montana */
  Mt = 'MT',
  /** Nebraska */
  Ne = 'NE',
  /** Nevada */
  Nv = 'NV',
  /** New Hampshire */
  Nh = 'NH',
  /** New Jersey */
  Nj = 'NJ',
  /** New Mexico */
  Nm = 'NM',
  /** New York */
  Ny = 'NY',
  /** North Carolina */
  Nc = 'NC',
  /** North Dakota */
  Nd = 'ND',
  /** Northern Mariana Islands */
  Mp = 'MP',
  /** Ohio */
  Oh = 'OH',
  /** Oklahoma */
  Ok = 'OK',
  /** Oregon */
  Or = 'OR',
  /** Pennsylvania */
  Pa = 'PA',
  /** Puerto Rico */
  Pr = 'PR',
  /** Rhode Island */
  Ri = 'RI',
  /** South Carolina */
  Sc = 'SC',
  /** South Dakota */
  Sd = 'SD',
  /** Tennessee */
  Tn = 'TN',
  /** Texas */
  Tx = 'TX',
  /** Utah */
  Ut = 'UT',
  /** Vermont */
  Vt = 'VT',
  /** Virgin Islands */
  Vi = 'VI',
  /** Virginia */
  Va = 'VA',
  /** Washington */
  Wa = 'WA',
  /** West Virginia */
  Wv = 'WV',
  /** Wisconsin */
  Wi = 'WI',
  /** Wyoming */
  Wy = 'WY'
}

export type CustomerType = {
  __typename?: 'CustomerType';
  id: Scalars['ID'];
  lastLogin?: Maybe<Scalars['DateTime']>;
  /** Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only. */
  username: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  dateJoined: Scalars['DateTime'];
  profile?: Maybe<ProfileType>;
};





export type Login = {
  __typename?: 'Login';
  success?: Maybe<Scalars['Boolean']>;
  token?: Maybe<Scalars['String']>;
  customer?: Maybe<CustomerType>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createCustomer?: Maybe<CreateCustomer>;
  createAddress?: Maybe<CreateAddress>;
  login?: Maybe<Login>;
  verifyToken?: Maybe<Verify>;
  refreshToken?: Maybe<Refresh>;
  createOrder?: Maybe<CreateOrder>;
};


export type MutationCreateCustomerArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationCreateAddressArgs = {
  address?: Maybe<AddressInput>;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationVerifyTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationRefreshTokenArgs = {
  token?: Maybe<Scalars['String']>;
};


export type MutationCreateOrderArgs = {
  orderItems?: Maybe<Array<Maybe<OrderItemInput>>>;
};

export type OrderDateFilterType = {
  start?: Maybe<Scalars['Date']>;
  end?: Maybe<Scalars['Date']>;
};

export type OrderFilterByType = {
  ids?: Maybe<Array<Maybe<Scalars['ID']>>>;
  date?: Maybe<OrderDateFilterType>;
  price?: Maybe<OrderPriceFilterType>;
};

export type OrderFilterInputType = {
  by?: Maybe<OrderFilterByType>;
};

export type OrderItemInput = {
  productId?: Maybe<Scalars['String']>;
  variantId?: Maybe<Scalars['String']>;
  quantity?: Maybe<Scalars['Int']>;
};

export type OrderItemQueryResponseType = {
  __typename?: 'OrderItemQueryResponseType';
  productVariation?: Maybe<AllVariantsType>;
  productName?: Maybe<Scalars['String']>;
  image?: Maybe<CloudinaryImageType>;
};

export type OrderItemResponseType = {
  __typename?: 'OrderItemResponseType';
  productVariation?: Maybe<AllVariantsType>;
  productName?: Maybe<Scalars['String']>;
  image?: Maybe<CloudinaryImageType>;
  response?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export type OrderPriceFilterType = {
  less?: Maybe<Scalars['Float']>;
  more?: Maybe<Scalars['Float']>;
  eq?: Maybe<Scalars['Float']>;
};

export type OrderType = {
  __typename?: 'OrderType';
  orderItems?: Maybe<Array<Maybe<OrderItemQueryResponseType>>>;
  id?: Maybe<Scalars['ID']>;
  status?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
  datePlaced?: Maybe<Scalars['Date']>;
};

export type PaginatedProductIdsType = {
  __typename?: 'PaginatedProductIdsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<Scalars['ID']>>;
};

export type PaginatedProductsType = {
  __typename?: 'PaginatedProductsType';
  hasMore?: Maybe<Scalars['Boolean']>;
  results?: Maybe<Array<ProductType>>;
};

export type ProductType = {
  __typename?: 'ProductType';
  id: Scalars['ID'];
  name: Scalars['String'];
  description: Scalars['String'];
  category: CategoryType;
  brand: Scalars['String'];
  createdDate: Scalars['Date'];
  slug: Scalars['String'];
  weight: Scalars['Decimal'];
  variants?: Maybe<Array<AllVariantsType>>;
  hasDifferentVariantPricing: Scalars['Boolean'];
  lowestVariantPrice: Scalars['Decimal'];
  variationOptions?: Maybe<Array<VariationOptionType>>;
  image: CloudinaryImageType;
};

export type ProfileType = {
  __typename?: 'ProfileType';
  id: Scalars['ID'];
  addresses: Array<AddressType>;
};

export type Query = {
  __typename?: 'Query';
  getCustomerProfile?: Maybe<ProfileType>;
  getCustomer?: Maybe<CustomerType>;
  getOrders?: Maybe<Array<Maybe<OrderType>>>;
  getVariantById?: Maybe<AllVariantsType>;
  getAllProducts?: Maybe<Array<ProductType>>;
  getProductById?: Maybe<ProductType>;
  getAllPaginatedProducts?: Maybe<PaginatedProductsType>;
  getProductBySlug?: Maybe<ProductType>;
  getBaseProd?: Maybe<Array<ProductType>>;
  getAllCategories?: Maybe<Array<Maybe<CategoryType>>>;
  getProductIdsFromCategory?: Maybe<Array<Maybe<Scalars['ID']>>>;
  getPaginatedProductIdsFromCategory?: Maybe<PaginatedProductIdsType>;
};


export type QueryGetOrdersArgs = {
  filter?: Maybe<OrderFilterInputType>;
};


export type QueryGetVariantByIdArgs = {
  productId?: Maybe<Scalars['ID']>;
  variantId?: Maybe<Scalars['ID']>;
};


export type QueryGetProductByIdArgs = {
  id?: Maybe<Scalars['ID']>;
};


export type QueryGetAllPaginatedProductsArgs = {
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryGetProductBySlugArgs = {
  slug?: Maybe<Scalars['String']>;
};


export type QueryGetProductIdsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
};


export type QueryGetPaginatedProductIdsFromCategoryArgs = {
  categoryName?: Maybe<Scalars['String']>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Refresh = {
  __typename?: 'Refresh';
  payload: Scalars['GenericScalar'];
  refreshExpiresIn: Scalars['Int'];
  token: Scalars['String'];
};

export type TireVariantType = {
  __typename?: 'TireVariantType';
  id: Scalars['ID'];
  productCode: Scalars['String'];
  stock: Scalars['Int'];
  unitPrice: Scalars['Decimal'];
  height: Scalars['Int'];
  width: Scalars['Int'];
  rimCircumference: Scalars['Int'];
};

export type VariationOptionType = {
  __typename?: 'VariationOptionType';
  label: Scalars['String'];
  options?: Maybe<Array<Scalars['String']>>;
};

export type Verify = {
  __typename?: 'Verify';
  payload: Scalars['GenericScalar'];
};

export type WheelVariantType = {
  __typename?: 'WheelVariantType';
  id: Scalars['ID'];
  productCode: Scalars['String'];
  stock: Scalars['Int'];
  unitPrice: Scalars['Decimal'];
  size: Scalars['String'];
  boltPattern: Scalars['String'];
};

export type CategoryFragment = (
  { __typename?: 'CategoryType' }
  & Pick<CategoryType, 'id' | 'name'>
);

export type AddressFragment = (
  { __typename?: 'AddressType' }
  & Pick<AddressType, 'id' | 'name' | 'address1' | 'address2' | 'city' | 'state' | 'zipCode' | 'country'>
);

export type CustomerProfileFragment = (
  { __typename?: 'ProfileType' }
  & Pick<ProfileType, 'id'>
  & { addresses: Array<(
    { __typename?: 'AddressType' }
    & AddressFragment
  )> }
);

export type CustomerFragment = (
  { __typename?: 'CustomerType' }
  & Pick<CustomerType, 'id' | 'username' | 'firstName' | 'lastName' | 'lastLogin' | 'dateJoined' | 'email'>
  & { profile?: Maybe<(
    { __typename?: 'ProfileType' }
    & CustomerProfileFragment
  )> }
);

export type ImageFragment = (
  { __typename?: 'CloudinaryImageType' }
  & Pick<CloudinaryImageType, 'url' | 'type' | 'format' | 'id'>
);

export type OrderItemResponseFragment = (
  { __typename?: 'OrderItemResponseType' }
  & Pick<OrderItemResponseType, 'productName' | 'response' | 'message'>
  & { image?: Maybe<(
    { __typename?: 'CloudinaryImageType' }
    & ImageFragment
  )>, productVariation?: Maybe<(
    { __typename?: 'WheelVariantType' }
    & WheelVariantFragment
  ) | (
    { __typename?: 'TireVariantType' }
    & TireVariantFragment
  )> }
);

export type ProductFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'id' | 'description' | 'createdDate' | 'slug' | 'weight' | 'brand' | 'lowestVariantPrice' | 'hasDifferentVariantPricing'>
  & { variationOptions?: Maybe<Array<(
    { __typename?: 'VariationOptionType' }
    & Pick<VariationOptionType, 'label' | 'options'>
  )>>, image: (
    { __typename?: 'CloudinaryImageType' }
    & ImageFragment
  ), category: (
    { __typename?: 'CategoryType' }
    & CategoryFragment
  ), variants?: Maybe<Array<(
    { __typename?: 'WheelVariantType' }
    & WheelVariantFragment
  ) | (
    { __typename?: 'TireVariantType' }
    & TireVariantFragment
  )>> }
);

export type ProductTileFragment = (
  { __typename?: 'ProductType' }
  & Pick<ProductType, 'name' | 'id' | 'description' | 'brand' | 'hasDifferentVariantPricing' | 'lowestVariantPrice' | 'slug'>
  & { image: (
    { __typename?: 'CloudinaryImageType' }
    & ImageFragment
  ) }
);

export type WheelVariantFragment = (
  { __typename?: 'WheelVariantType' }
  & Pick<WheelVariantType, 'id' | 'productCode' | 'stock' | 'unitPrice' | 'size' | 'boltPattern'>
);

export type TireVariantFragment = (
  { __typename?: 'TireVariantType' }
  & Pick<TireVariantType, 'id' | 'productCode' | 'stock' | 'unitPrice' | 'height' | 'width' | 'rimCircumference'>
);

export type CreateAddressMutationVariables = Exact<{
  address?: Maybe<AddressInput>;
}>;


export type CreateAddressMutation = (
  { __typename?: 'Mutation' }
  & { createAddress?: Maybe<(
    { __typename?: 'CreateAddress' }
    & Pick<CreateAddress, 'success'>
    & { address?: Maybe<(
      { __typename?: 'AddressType' }
      & AddressFragment
    )> }
  )> }
);

export type CreateCustomerMutationVariables = Exact<{
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateCustomerMutation = (
  { __typename?: 'Mutation' }
  & { createCustomer?: Maybe<(
    { __typename?: 'CreateCustomer' }
    & Pick<CreateCustomer, 'success' | 'token'>
    & { customer?: Maybe<(
      { __typename?: 'CustomerType' }
      & CustomerFragment
    )> }
  )> }
);

export type CreateOrderMutationVariables = Exact<{
  orderItems?: Maybe<Array<Maybe<OrderItemInput>> | Maybe<OrderItemInput>>;
}>;


export type CreateOrderMutation = (
  { __typename?: 'Mutation' }
  & { createOrder?: Maybe<(
    { __typename?: 'CreateOrder' }
    & Pick<CreateOrder, 'id' | 'status' | 'message'>
    & { orderItems?: Maybe<Array<(
      { __typename?: 'OrderItemResponseType' }
      & OrderItemResponseFragment
    )>> }
  )> }
);

export type LoginMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'Login' }
    & Pick<Login, 'success' | 'token'>
    & { customer?: Maybe<(
      { __typename?: 'CustomerType' }
      & CustomerFragment
    )> }
  )> }
);

export type VerifyTokenMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type VerifyTokenMutation = (
  { __typename?: 'Mutation' }
  & { verifyToken?: Maybe<(
    { __typename?: 'Verify' }
    & Pick<Verify, 'payload'>
  )> }
);

export type GetAllProductTilesQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetAllProductTilesQuery = (
  { __typename?: 'Query' }
  & { getAllPaginatedProducts?: Maybe<(
    { __typename?: 'PaginatedProductsType' }
    & Pick<PaginatedProductsType, 'hasMore'>
    & { results?: Maybe<Array<(
      { __typename?: 'ProductType' }
      & ProductTileFragment
    )>> }
  )> }
);

export type GetProductBySlugQueryVariables = Exact<{
  slug: Scalars['String'];
}>;


export type GetProductBySlugQuery = (
  { __typename?: 'Query' }
  & { getProductBySlug?: Maybe<(
    { __typename?: 'ProductType' }
    & ProductFragment
  )> }
);

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetProductByIdQuery = (
  { __typename?: 'Query' }
  & { getProductById?: Maybe<(
    { __typename?: 'ProductType' }
    & ProductFragment
  )> }
);

export type GetVariantByIdQueryVariables = Exact<{
  productId: Scalars['ID'];
  variantId: Scalars['ID'];
}>;


export type GetVariantByIdQuery = (
  { __typename?: 'Query' }
  & { getVariantById?: Maybe<(
    { __typename?: 'WheelVariantType' }
    & WheelVariantFragment
  ) | (
    { __typename?: 'TireVariantType' }
    & TireVariantFragment
  )> }
);

export const AddressFragmentDoc = gql`
    fragment Address on AddressType {
  id
  name
  address1
  address2
  city
  state
  zipCode
  country
}
    `;
export const CustomerProfileFragmentDoc = gql`
    fragment CustomerProfile on ProfileType {
  id
  addresses {
    ...Address
  }
}
    ${AddressFragmentDoc}`;
export const CustomerFragmentDoc = gql`
    fragment Customer on CustomerType {
  id
  username
  firstName
  lastName
  lastLogin
  dateJoined
  email
  profile {
    ...CustomerProfile
  }
}
    ${CustomerProfileFragmentDoc}`;
export const ImageFragmentDoc = gql`
    fragment Image on CloudinaryImageType {
  url
  type
  format
  id
}
    `;
export const WheelVariantFragmentDoc = gql`
    fragment WheelVariant on WheelVariantType {
  id
  productCode
  stock
  unitPrice
  size
  boltPattern
}
    `;
export const TireVariantFragmentDoc = gql`
    fragment TireVariant on TireVariantType {
  id
  productCode
  stock
  unitPrice
  height
  width
  rimCircumference
}
    `;
export const OrderItemResponseFragmentDoc = gql`
    fragment OrderItemResponse on OrderItemResponseType {
  productName
  response
  message
  image {
    ...Image
  }
  productVariation {
    ...WheelVariant
    ...TireVariant
  }
}
    ${ImageFragmentDoc}
${WheelVariantFragmentDoc}
${TireVariantFragmentDoc}`;
export const CategoryFragmentDoc = gql`
    fragment Category on CategoryType {
  id
  name
}
    `;
export const ProductFragmentDoc = gql`
    fragment Product on ProductType {
  variationOptions {
    label
    options
  }
  name
  id
  image {
    ...Image
  }
  description
  category {
    ...Category
  }
  createdDate
  slug
  weight
  variants {
    ...WheelVariant
    ...TireVariant
  }
  brand
  lowestVariantPrice
  hasDifferentVariantPricing
}
    ${ImageFragmentDoc}
${CategoryFragmentDoc}
${WheelVariantFragmentDoc}
${TireVariantFragmentDoc}`;
export const ProductTileFragmentDoc = gql`
    fragment ProductTile on ProductType {
  name
  id
  description
  brand
  hasDifferentVariantPricing
  lowestVariantPrice
  image {
    ...Image
  }
  slug
}
    ${ImageFragmentDoc}`;
export const CreateAddressDocument = gql`
    mutation createAddress($address: AddressInput) {
  createAddress(address: $address) {
    success
    address {
      ...Address
    }
  }
}
    ${AddressFragmentDoc}`;
export type CreateAddressMutationFn = Apollo.MutationFunction<CreateAddressMutation, CreateAddressMutationVariables>;

/**
 * __useCreateAddressMutation__
 *
 * To run a mutation, you first call `useCreateAddressMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAddressMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAddressMutation, { data, loading, error }] = useCreateAddressMutation({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useCreateAddressMutation(baseOptions?: Apollo.MutationHookOptions<CreateAddressMutation, CreateAddressMutationVariables>) {
        return Apollo.useMutation<CreateAddressMutation, CreateAddressMutationVariables>(CreateAddressDocument, baseOptions);
      }
export type CreateAddressMutationHookResult = ReturnType<typeof useCreateAddressMutation>;
export type CreateAddressMutationResult = Apollo.MutationResult<CreateAddressMutation>;
export type CreateAddressMutationOptions = Apollo.BaseMutationOptions<CreateAddressMutation, CreateAddressMutationVariables>;
export const CreateCustomerDocument = gql`
    mutation createCustomer($email: String!, $username: String!, $password: String!) {
  createCustomer(email: $email, username: $username, password: $password) {
    success
    token
    customer {
      ...Customer
    }
  }
}
    ${CustomerFragmentDoc}`;
export type CreateCustomerMutationFn = Apollo.MutationFunction<CreateCustomerMutation, CreateCustomerMutationVariables>;

/**
 * __useCreateCustomerMutation__
 *
 * To run a mutation, you first call `useCreateCustomerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateCustomerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createCustomerMutation, { data, loading, error }] = useCreateCustomerMutation({
 *   variables: {
 *      email: // value for 'email'
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateCustomerMutation(baseOptions?: Apollo.MutationHookOptions<CreateCustomerMutation, CreateCustomerMutationVariables>) {
        return Apollo.useMutation<CreateCustomerMutation, CreateCustomerMutationVariables>(CreateCustomerDocument, baseOptions);
      }
export type CreateCustomerMutationHookResult = ReturnType<typeof useCreateCustomerMutation>;
export type CreateCustomerMutationResult = Apollo.MutationResult<CreateCustomerMutation>;
export type CreateCustomerMutationOptions = Apollo.BaseMutationOptions<CreateCustomerMutation, CreateCustomerMutationVariables>;
export const CreateOrderDocument = gql`
    mutation createOrder($orderItems: [OrderItemInput]) {
  createOrder(orderItems: $orderItems) {
    id
    status
    message
    orderItems {
      ...OrderItemResponse
    }
  }
}
    ${OrderItemResponseFragmentDoc}`;
export type CreateOrderMutationFn = Apollo.MutationFunction<CreateOrderMutation, CreateOrderMutationVariables>;

/**
 * __useCreateOrderMutation__
 *
 * To run a mutation, you first call `useCreateOrderMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateOrderMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createOrderMutation, { data, loading, error }] = useCreateOrderMutation({
 *   variables: {
 *      orderItems: // value for 'orderItems'
 *   },
 * });
 */
export function useCreateOrderMutation(baseOptions?: Apollo.MutationHookOptions<CreateOrderMutation, CreateOrderMutationVariables>) {
        return Apollo.useMutation<CreateOrderMutation, CreateOrderMutationVariables>(CreateOrderDocument, baseOptions);
      }
export type CreateOrderMutationHookResult = ReturnType<typeof useCreateOrderMutation>;
export type CreateOrderMutationResult = Apollo.MutationResult<CreateOrderMutation>;
export type CreateOrderMutationOptions = Apollo.BaseMutationOptions<CreateOrderMutation, CreateOrderMutationVariables>;
export const LoginDocument = gql`
    mutation login($username: String!, $password: String!) {
  login(username: $username, password: $password) {
    success
    token
    customer {
      ...Customer
    }
  }
}
    ${CustomerFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const VerifyTokenDocument = gql`
    mutation verifyToken($token: String!) {
  verifyToken(token: $token) {
    payload
  }
}
    `;
export type VerifyTokenMutationFn = Apollo.MutationFunction<VerifyTokenMutation, VerifyTokenMutationVariables>;

/**
 * __useVerifyTokenMutation__
 *
 * To run a mutation, you first call `useVerifyTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyTokenMutation, { data, loading, error }] = useVerifyTokenMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useVerifyTokenMutation(baseOptions?: Apollo.MutationHookOptions<VerifyTokenMutation, VerifyTokenMutationVariables>) {
        return Apollo.useMutation<VerifyTokenMutation, VerifyTokenMutationVariables>(VerifyTokenDocument, baseOptions);
      }
export type VerifyTokenMutationHookResult = ReturnType<typeof useVerifyTokenMutation>;
export type VerifyTokenMutationResult = Apollo.MutationResult<VerifyTokenMutation>;
export type VerifyTokenMutationOptions = Apollo.BaseMutationOptions<VerifyTokenMutation, VerifyTokenMutationVariables>;
export const GetAllProductTilesDocument = gql`
    query getAllProductTiles($offset: Int!, $limit: Int!) {
  getAllPaginatedProducts(offset: $offset, limit: $limit) {
    hasMore
    results {
      ...ProductTile
    }
  }
}
    ${ProductTileFragmentDoc}`;

/**
 * __useGetAllProductTilesQuery__
 *
 * To run a query within a React component, call `useGetAllProductTilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllProductTilesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllProductTilesQuery({
 *   variables: {
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetAllProductTilesQuery(baseOptions: Apollo.QueryHookOptions<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>) {
        return Apollo.useQuery<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>(GetAllProductTilesDocument, baseOptions);
      }
export function useGetAllProductTilesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>) {
          return Apollo.useLazyQuery<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>(GetAllProductTilesDocument, baseOptions);
        }
export type GetAllProductTilesQueryHookResult = ReturnType<typeof useGetAllProductTilesQuery>;
export type GetAllProductTilesLazyQueryHookResult = ReturnType<typeof useGetAllProductTilesLazyQuery>;
export type GetAllProductTilesQueryResult = Apollo.QueryResult<GetAllProductTilesQuery, GetAllProductTilesQueryVariables>;
export const GetProductBySlugDocument = gql`
    query getProductBySlug($slug: String!) {
  getProductBySlug(slug: $slug) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductBySlugQuery__
 *
 * To run a query within a React component, call `useGetProductBySlugQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductBySlugQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductBySlugQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGetProductBySlugQuery(baseOptions: Apollo.QueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
        return Apollo.useQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, baseOptions);
      }
export function useGetProductBySlugLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductBySlugQuery, GetProductBySlugQueryVariables>) {
          return Apollo.useLazyQuery<GetProductBySlugQuery, GetProductBySlugQueryVariables>(GetProductBySlugDocument, baseOptions);
        }
export type GetProductBySlugQueryHookResult = ReturnType<typeof useGetProductBySlugQuery>;
export type GetProductBySlugLazyQueryHookResult = ReturnType<typeof useGetProductBySlugLazyQuery>;
export type GetProductBySlugQueryResult = Apollo.QueryResult<GetProductBySlugQuery, GetProductBySlugQueryVariables>;
export const GetProductByIdDocument = gql`
    query getProductById($id: ID!) {
  getProductById(id: $id) {
    ...Product
  }
}
    ${ProductFragmentDoc}`;

/**
 * __useGetProductByIdQuery__
 *
 * To run a query within a React component, call `useGetProductByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProductByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProductByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetProductByIdQuery(baseOptions: Apollo.QueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
        return Apollo.useQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, baseOptions);
      }
export function useGetProductByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetProductByIdQuery, GetProductByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetProductByIdQuery, GetProductByIdQueryVariables>(GetProductByIdDocument, baseOptions);
        }
export type GetProductByIdQueryHookResult = ReturnType<typeof useGetProductByIdQuery>;
export type GetProductByIdLazyQueryHookResult = ReturnType<typeof useGetProductByIdLazyQuery>;
export type GetProductByIdQueryResult = Apollo.QueryResult<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetVariantByIdDocument = gql`
    query getVariantById($productId: ID!, $variantId: ID!) {
  getVariantById(productId: $productId, variantId: $variantId) {
    ... on WheelVariantType {
      ...WheelVariant
    }
    ... on TireVariantType {
      ...TireVariant
    }
  }
}
    ${WheelVariantFragmentDoc}
${TireVariantFragmentDoc}`;

/**
 * __useGetVariantByIdQuery__
 *
 * To run a query within a React component, call `useGetVariantByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetVariantByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetVariantByIdQuery({
 *   variables: {
 *      productId: // value for 'productId'
 *      variantId: // value for 'variantId'
 *   },
 * });
 */
export function useGetVariantByIdQuery(baseOptions: Apollo.QueryHookOptions<GetVariantByIdQuery, GetVariantByIdQueryVariables>) {
        return Apollo.useQuery<GetVariantByIdQuery, GetVariantByIdQueryVariables>(GetVariantByIdDocument, baseOptions);
      }
export function useGetVariantByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetVariantByIdQuery, GetVariantByIdQueryVariables>) {
          return Apollo.useLazyQuery<GetVariantByIdQuery, GetVariantByIdQueryVariables>(GetVariantByIdDocument, baseOptions);
        }
export type GetVariantByIdQueryHookResult = ReturnType<typeof useGetVariantByIdQuery>;
export type GetVariantByIdLazyQueryHookResult = ReturnType<typeof useGetVariantByIdLazyQuery>;
export type GetVariantByIdQueryResult = Apollo.QueryResult<GetVariantByIdQuery, GetVariantByIdQueryVariables>;

      export type PossibleTypesResultData = {
  "possibleTypes": {
    "AllVariantsType": [
      "WheelVariantType",
      "TireVariantType"
    ]
  }
};
      const result: PossibleTypesResultData = {
  "possibleTypes": {
    "AllVariantsType": [
      "WheelVariantType",
      "TireVariantType"
    ]
  }
};
      export default result;
    