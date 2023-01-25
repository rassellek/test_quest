import React from "react";
// import Table from "@/cabinet/ui/VirtualTable/Table";
// import getImageUrl from "@/cabinet/helper/getImageUrl";
// import {
//     sortableContainer,
//     sortableElement,
//     sortableHandle
// } from "react-sortable-hoc";

import Table from "./Table";
import ReactDragListView from "react-drag-listview";
import styles from "../styles/Home.module.css";

function formatting(response) {
  return response.data.data.map((item) => ({
    ...item,
    name: {
      id: item.id,
      name: item.item_name,
      src: getImageUrl(item.id),
    },
    // availability: Object.keys(item).reduce((sum, current) => sum + current, 0),
  }));
}

export default class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [
        {
          key: 0,
          name: "Карты торо",
          id: 18427716,
          price: 21340,
          orders_count_period: 105,
          revenue_period: 2240700,
          revenue: 268884000,
          revenue_trand: "",
          lost_revenue: "",
          seller: "Тара ООО",
          brand: "",
          orders_count: "",
          stocks: "",
          rating: "",
          feedbacks: "",
          add_date: new Date("25 January 2023 14:48 UTC"),
        },
        {
          key: 1,
          name: "Спрей сывортка",
          id: 7052045,
          price: 2775,
          orders_count_period: 74,
          revenue_period: 205350,
          revenue: 277500000,
          revenue_trand: "",
          lost_revenue: "",
          seller: "ООО ДАЛЬБА",
          brand: "",
          orders_count: "",
          stocks: "",
          rating: "",
          feedbacks: "",
          add_date: new Date("25 January 2023 14:48 UTC"),
        },
        {
          key: 2,
          name: "Свечи для торта",
          id: 8240886,
          price: 99000,
          orders_count_period: 0,
          revenue_period: 0,
          revenue: 257400000,
          revenue_trand: "",
          lost_revenue: "",
          seller: "Ангельчев Руслан",
          brand: "",
          orders_count: "",
          stocks: "",
          rating: "",
          feedbacks: "",
          add_date: new Date("25 January 2023 14:48 UTC"),
        },
      ],

      columns: [
        {
          title: "Название",
          dataIndex: "name",
          key: "name",
          search: true,
          type: "title",
          fixed: "left",
          type: String,
        },
        {
          title: "Артикул",
          dataIndex: "id",
          key: "id",
          search: true,
          isCount: true,
          width: 100,
        },
        {
          title: "Цена",
          suffix: "руб",
          dataIndex: "price",
          key: "price",
          type: "price",
          sorter: true,
          isCount: true,
          width: 100,
        },
        {
          title: "Продажи",
          suffix: "шт",
          dataIndex: "orders_count_period",
          key: "orders_count_period",
          sorter: true,
          isCount: true,
          width: 130,
        },
        {
          title: "Выручка за период",
          suffix: "руб",
          dataIndex: "revenue_period",
          key: "revenue_period",
          sorter: true,
          isCount: true,
          width: 200,
        },
        {
          title: "Выручка",
          suffix: "руб",
          dataIndex: "revenue",
          key: "revenue",
          sorter: true,
          isCount: true,
          width: 130,
        },
        {
          title: "Тренд выручки",
          dataIndex: "revenue_trand",
          key: "revenue_trand",
          type: "trend",
          sorter: true,
          align: "right",
          width: 140,
        },
        {
          title: "Упущенная выручка",
          dataIndex: "lost revenue",
          key: "lost revenue",
          sorter: true,
          isCount: true,
          width: 170,
        },
        {
          title: "Продавец",
          dataIndex: "seller",
          key: "seller",
          type: "link",
          link: "sellers",
          search: true,
          width: 200,
          type: String,
        },
        {
          title: "Бренд",
          dataIndex: "brand",
          key: "brand",
          type: "link",
          link: "brands",
          search: true,
          width: 180,
        },
        {
          title: "Продажи за все время",
          suffix: "шт",
          dataIndex: "orders_count",
          key: "orders_count",
          isCount: true,
          sorter: true,
          width: 210,
        },
        {
          title: "Наличие",
          suffix: "шт",
          dataIndex: "stocks",
          key: "stocks",
          isCount: true,
          sorter: true,
          width: 130,
        },
        {
          title: "Рейтинг",
          dataIndex: "rating",
          key: "rating",
          type: "rating",
          sorter: true,
          width: 100,
        },
        {
          title: "Отзывов",
          suffix: "шт",
          dataIndex: "feedbacks",
          key: "feedbacks",
          isCount: true,
          sorter: true,
          width: 120,
        },
        {
          title: "Дата обнаружения товара",
          dataIndex: "add_date",
          key: "add_date",
          render: (text) =>
            new Date(text).toLocaleString("ru-RU", {
              year: "numeric",
              month: "numeric",
              day: "numeric",
            }),
          sorter: true,
          width: 120,
          type: Date,
        },
      ],
    };

    const that = this;
    this.dragProps = {
      onDragEnd(fromIndex, toIndex) {
        const columns = [...that.state.columns];
        const item = columns.splice(fromIndex - 1, 1)[0];
        columns.splice(toIndex - 1, 0, item);
        that.setState({
          columns,
        });
      },
      nodeSelector: "th",
    };
  }

  render(props) {
    return (
      <div className={styles.table}>
        <ReactDragListView.DragColumn {...this.dragProps}>
          <Table
            columns={this.state.columns}
            dataSource={this.state.data}
            formatting={formatting}
            type="items"
            {...props}
          />
        </ReactDragListView.DragColumn>
      </div>
    );
  }
}
