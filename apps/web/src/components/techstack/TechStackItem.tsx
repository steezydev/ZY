import clsxm from '@/lib/clsxm';

import Tooltip from '@/components/tooltip/Tooltip';

import { TechStackItemProps } from '@/types/props/TechStackItemProps';

function TechStackItem({ children, tooltip, className }: TechStackItemProps) {
  return (
    <Tooltip text={tooltip}>
      <span className={clsxm('fill-white text-2xl', className)}>
        {children}
      </span>
    </Tooltip>
  );
}

export default TechStackItem;
