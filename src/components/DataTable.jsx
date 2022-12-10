import { datasource } from "../assets/data";
import { Table } from "antd";
import "./DataTable.css";
import moment from "moment";

const DataTable = () => {
  const columns = [
    {
      title: "Firstname",
      dataIndex: "first_name",
      key: "firstname",
      align: "center",
      sorter: (a, b) => a.first_name.localeCompare(b.first_name),
    },
    {
      title: "Lastname",
      dataIndex: "last_name",
      key: "lastname",
      align: "center",
      sorter: (a, b) => a.last_name.length - b.last_name.length,
    },

    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      align: "center",
      filters: [
        {
          text: "Male",
          value: "Male",
        },
        {
          text: "Female",
          value: "Female",
        },
        {
          text: "Polygender",
          value: "Polygender",
        },
        {
          text: "Bigender",
          value: "Bigender",
        },
      ],
      filterMode: "tree",
      filterSearch: true,
      onFilter: (value, record) => record.gender.startsWith(value),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      align: "center",
    },

    {
      title: "Ip_address",
      dataIndex: "ip_address",
      key: "ip_address",
      align: "center",
    },
    {
      title: "Airport code",
      dataIndex: "airport code",
      key: "airport code",
      align: "center",
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      align: "center",
      sorter: (a, b) => moment(a.time).unix() - moment(b.time).unix(),
    },

    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
      align: "center",
    },
    {
      title: "Area",
      dataIndex: "area",
      key: "area",
      align: "center",
    },
  ];

  return (
    <div>
      <Table
        dataSource={datasource}
        columns={columns}
        className={"ant-table-container "}
        rowClassName={(record, index) =>
          record.status == true ? "table-row-green" : "table-row-red"
        }
        pagination={{
          position: ["bottomCenter"],
        }}
        rowSelection={true}
        rowKey={(record) => record.id}
      />
    </div>
  );
};

export default DataTable;
