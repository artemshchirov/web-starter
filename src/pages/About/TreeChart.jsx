// TODO: .tsx
import { useState } from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

const TreeChart = () => {
  const [selection, setSelection] = useState([]);
  const data = [
    {
      label: 'web-starter /main',
      type: 'node-header',
      className: 'p-person',
      expanded: true,
      data: { name: 'mono frontend backend' },
      children: [
        {
          label: 'frontend /react page SPA',
          type: 'frontend',
          className: 'p-person',
          expanded: true,
          data: {
            name: 'Vite React.js TypeScript Tailwind CSS Primereact',
          },
          children: [
            {
              label: '/routes',
              type: 'frontend',
              className: 'p-person',
              expanded: true,
              data: { name: 'react-router-dom' },
              children: [
                {
                  label: '/deploy',
                  type: 'frontend',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'custom frontend' },
                  children: [
                    {
                      label: 'Vercel',
                      className: 'vercel',
                    },
                  ],
                },
              ],
            },

            {
              label: 'api',
              className: 'frontend',
              expanded: true,
              children: [
                {
                  label: '/r-restapi',
                  type: 'frontend',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'REST API' },
                },
                {
                  label: '/r-graphql',
                  type: 'frontend',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'GraphQL' },
                },
              ],
            },

            {
              label: 'feat',
              className: 'frontend',
              expanded: 'true',
              children: [
                {
                  label: '/redux',
                  type: 'frontend',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'toolkit' },
                },
                {
                  label: '/auth',
                  type: 'frontend',
                  className: 'p-person',
                  expanded: true,
                  data: { name: 'formik' },
                },
              ],
            },
          ],
        },
        {
          label: 'backend /nest auth role post',
          type: 'backend',
          className: 'p-person',
          expanded: true,
          data: {
            name: 'NestJS Docker Nginx',
          },
          children: [
            {
              label: 'api',
              className: 'backend',
              expanded: true,
              children: [
                {
                  label: '/n-restapi',
                  type: 'backend',
                  className: 'p-person',
                  expanded: true,
                  data: {
                    name: 'REST API',
                  },
                },
                {
                  label: '/n-graphql',
                  type: 'backend',
                  className: 'p-person',
                  expanded: true,
                  data: {
                    name: 'GraphQL',
                  },
                },
              ],
            },
            {
              label: 'typeorm',
              className: 'backend',
              expanded: 'true',
              children: [
                {
                  label: '/postgresql',
                  type: 'backend',
                  className: 'p-person',
                  expanded: true,
                  data: {
                    name: 'PostgreSQL',
                  },
                },
                {
                  label: '/mongodb',
                  type: 'backend',
                  className: 'p-person',
                  expanded: true,
                  data: {
                    name: 'MongoDB',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const nodeTemplate = (node) => {
    if (node.type) {
      return (
        <div>
          <div className={`node-header ${node.type}`}>{node.label}</div>
          <div className="node-content flex flex-col items-center">
            <div>{node.data.name}</div>
          </div>
        </div>
      );
    }

    return node.label;
  };

  return (
    <div className="organizationchart-demo">
      <div className="card">
        <OrganizationChart
          value={data}
          nodeTemplate={nodeTemplate}
          selection={selection}
          selectionMode="multiple"
          onSelectionChange={(event) => setSelection(event.data)}
          className="company"
        ></OrganizationChart>
      </div>
    </div>
  );
};

export default TreeChart;
