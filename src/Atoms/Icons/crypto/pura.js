import React from 'react'
import withStyle from '../withStyle'

const InnerSvg = (
  <>
    <g fill="none" fill-rule="evenodd"><circle cx="16" cy="16" r="16" fill="#333"/><path fill="#FFF" fill-rule="nonzero" d="M11.192 8h7.764c2.148.127 4.511 1.01 5.46 3.06 1.187 2.611.597 6.283-2.077 7.773-2.466 1.41-5.416.854-8.124.97-.073 1.334.3 2.886-.63 4.014-.374.54-2.089 1.183-2.089 1.183s-.158-1.449-.216-4.71c-.037-.9.11-1.91.883-2.495.905-.778 2.188-.535 3.287-.575 1.66-.044 3.404.21 4.98-.43 2.312-.945 2.396-4.804.066-5.777-2.379-.922-5.006-.083-7.45-.593-1.11-.311-1.609-1.404-1.854-2.42zM7 12.43c2.03.037 4.064-.071 6.09.051 1.473.113 2.44 1.447 2.594 2.811-2.044-.01-4.093.065-6.138-.025C8.29 15.194 7.363 14.174 7 13.049v-.618z"/></g>
  </>
)

export const CryptoPura = withStyle(InnerSvg, 32, 32, 'CryptoPura', true)