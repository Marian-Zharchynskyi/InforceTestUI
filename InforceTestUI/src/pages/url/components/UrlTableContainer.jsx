import React, { useState, useEffect, useCallback } from "react";
import useActions from "../../../hooks/useActions";
import UrlsTable from "./UrlsTable";
import AddUrlModal from "./urlModals/AddUrlModal";

const UrlTableContainer = () => {
  const { getUrls } = useActions();

  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    getUrls();
  }, []);

  const openAddModal = useCallback(() => setShowAddModal(true), []);
  const closeAddModal = useCallback(() => setShowAddModal(false), []);

  return (
    <>
      <button className="btn btn-primary mb-3" onClick={openAddModal}>
        Add Url
      </button>

      <UrlsTable />

      <AddUrlModal showModal={showAddModal} closeModal={closeAddModal} />
    </>
  );
};

export default UrlTableContainer;
