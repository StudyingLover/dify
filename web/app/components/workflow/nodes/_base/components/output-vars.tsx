'use client'
import type { FC } from 'react'
import React from 'react'
import { useTranslation } from 'react-i18next'
import cn from 'classnames'

type Props = {
  className?: string
  title?: string
  children: JSX.Element
}

const OutputVars: FC<Props> = ({
  className,
  title,
  children,
}) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className={cn(className, 'leading-[18px] text-[13px] font-semibold text-gray-700 uppercase')}>
        {title || t('workflow.nodes.common.outputVars')}
      </div>
      <div className='mt-2 space-y-1'>
        {children}
      </div>
    </div>
  )
}
type VarItemProps = {
  name: string
  type: string
  description: string
  subItems?: {
    name: string
    type: string
    description: string
  }[]
}

export const VarItem: FC<VarItemProps> = ({
  name,
  type,
  description,
  subItems,
}) => {
  return (
    <div className='py-1'>
      <div className='flex leading-[18px]'>
        <div className='text-[13px] font-medium text-gray-900'>{name}</div>
        <div className='ml-2 text-xs font-normal text-gray-500 capitalize'>{type}</div>
      </div>
      <div className='mt-0.5 leading-[18px] text-xs font-normal text-gray-600'>
        {description}
        {subItems && (
          <div className='ml-2 border-l border-gray-200 pl-2'>
            {subItems.map((item, index) => (
              <VarItem
                key={index}
                name={item.name}
                type={item.type}
                description={item.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
export default React.memo(OutputVars)
