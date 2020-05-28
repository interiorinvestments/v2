import { forwardRef, useEffect, useState } from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {
  ArrowDownward,
  Check,
  ChevronLeft,
  ChevronRight,
  Clear,
  Delete,
  Edit,
  FirstPage,
  LastPage,
  SaveAlt,
  Search,
} from '@material-ui/icons';
import MaterialTable from 'material-table';

import typography from '../../src/theme/typography';

const tableIcons = {
  Check: forwardRef((props, ref) => (
    <Check {...props} ref={ref} color="secondary" />
  )),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <Delete {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => (
    <Edit {...props} ref={ref} color="secondary" />
  )),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
};

const theme = createMuiTheme({
  typography,
  palette: {
    secondary: {
      main: '#0078C1',
    },
  },
});

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await fetch('/api/products');
        if (res.status === 200) {
          const response = await res.json();
          // add subtotal
          setProducts(response.products);
        }
      } catch (err) {
        throw new Error(err);
      }
    };
    getProducts();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            {
              title: '',
              field: 'image',
              render: (rowData) => (
                <img
                  style={{ height: 50 }}
                  src={`${process.env.NEXT_PUBLIC_CMS_URL}${rowData.image}`}
                  alt={`${rowData.name} thumbnail`}
                />
              ),
              editable: 'never',
            },
            { title: 'Name', field: 'name', editable: 'never' },
            { title: 'Company', field: 'company', editable: 'never' },
            {
              title: 'Price',
              field: 'price',
              type: 'currency',
              editable: 'never',
            },
            {
              title: 'Quantity',
              field: 'quantity',
              type: 'numeric',
              editable: 'onUpdate',
            },
            {
              title: 'Subtotal',
              field: 'subtotal',
              type: 'currency',
              editable: 'never',
            },
          ]}
          data={products}
          icons={tableIcons}
          title="Products"
          isLoading={products.length === 0}
          options={{
            actionsColumnIndex: -1,
            exportButton: true,
          }}
          editable={{
            onRowUpdate: (newData, oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataUpdate = [...products];
                  const index = oldData.tableData.id;
                  dataUpdate[index] = newData;
                  setProducts([...dataUpdate]);

                  resolve();
                }, 1000);
              }),
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...products];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setProducts([...dataDelete]);

                  resolve();
                }, 1000);
              }),
          }}
        />
      </div>
    </ThemeProvider>
  );
};

export default ProductTable;
