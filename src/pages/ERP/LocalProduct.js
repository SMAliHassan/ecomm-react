import React from 'react';
import ReactDataGrid from '@inovua/reactdatagrid-community';
import '@inovua/reactdatagrid-community/index.css';

const LocalProduct = () => {
  const columns = [
    { name: 'image', header: 'Product & Image', minWidth: 210 },
    { name: 'Variation', header: 'Variation', minWidth: 100 },
    { name: 'Price', header: 'Price', minWidth: 120 },
    { name: 'MSKU', header: 'MSKU', minWidth: 100 },
    { name: 'Available Stock', header: 'Available Stock', minWidth: 110 },
    { name: 'Time', header: 'Time', minWidth: 110 },
  ];

  return (
    <div class="card">
      <div class="card-body">
        <h4>Master Product List</h4>

        <div class="mt-4">
          <ReactDataGrid idProperty="id" columns={columns} dataSource={[]} />
          {/* <table id="data-table" class="table data-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
                <th>Salary</th>
                <th>Salary</th>
                <th>Salary</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <div style={{ width: '5rem', aspectRatio: 1 / 1 }}>
                  <img
                    src="https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=416&q=80"
                    alt="product-img"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <td>System Architect</td>
                <td>Edinburgh</td>
                <td>61</td>
                <td>4/04/25</td>
                <td>$320,800</td>
              </tr>
              <tr>
                <td>Garrett Winters</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>63</td>
                <td>2011/07/25</td>
                <td>$170,750</td>
              </tr>
              <tr>
                <td>Ashton Cox</td>
                <td>Junior Technical Author</td>
                <td>San Francisco</td>
                <td>66</td>
                <td>2009/01/12</td>
                <td>$86,000</td>
              </tr>
              <tr>
                <td>Cedric Kelly</td>
                <td>Senior Javascript Developer</td>
                <td>Edinburgh</td>
                <td>22</td>
                <td>2012/03/29</td>
                <td>$433,060</td>
              </tr>
              <tr>
                <td>Airi Satou</td>
                <td>Accountant</td>
                <td>Tokyo</td>
                <td>33</td>
                <td>2008/11/28</td>
                <td>$162,700</td>
              </tr>
              <tr>
                <td>Brielle Williamson</td>
                <td>Integration Specialist</td>
                <td>New York</td>
                <td>61</td>
                <td>2012/12/02</td>
                <td>$372,000</td>
              </tr>
              <tr>
                <td>Herrod Chandler</td>
                <td>Sales Assistant</td>
                <td>San Francisco</td>
                <td>59</td>
                <td>2012/08/06</td>
                <td>$137,500</td>
              </tr>
              <tr>
                <td>Rhona Davidson</td>
                <td>Integration Specialist</td>
                <td>Tokyo</td>
                <td>55</td>
                <td>2010/10/14</td>
                <td>$327,900</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Office</th>
                <th>Age</th>
                <th>Start date</th>
                <th>Salary</th>
              </tr>
            </tfoot>
          </table> */}
        </div>
      </div>
    </div>
  );
};

export default LocalProduct;
