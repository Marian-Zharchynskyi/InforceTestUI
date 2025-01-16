import React from "react";
import UrlTableRow from "./UrlTableRow";
import { useSelector } from "react-redux";

const UrlsTable = () => {
  const urlList = useSelector((state) => state.url.urlList);

  return (
    <>
      <table className="table table-bordered table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Url</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {urlList.map((url) => (
            <UrlTableRow key={url.id} url={url} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default React.memo(UrlsTable);
