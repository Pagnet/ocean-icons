/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/explicit-module-boundary-types */
const IconTemplate = (
  { template }: any,
  _opts: any,
  { componentName, jsx, exports }: any
) => {
  const tsTemplate = template.smart({ plugins: ['typescript'] });
  return tsTemplate.ast`
      import React from 'react';
      ${'\n'}
      type IconProps = {
        size?: number;
      } & React.SVGProps<SVGSVGElement>;
      
      const ${componentName} = ({ size = 24, ...props }: IconProps, svgRef: React.Ref<SVGSVGElement>) => (
        ${jsx}
      );
      
      ${exports}
    `;
};

export default IconTemplate;
