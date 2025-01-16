import React, { useState, useCallback } from "react";
import isEqual from "lodash/isEqual";
import DeleteUrlModal from "./urlModals/DeleteUrlModal";
import EditUrlModal from "./urlModals/EditUrlModal";

const UrlTableRow = React.memo(
  ({ url }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedUrlId, setSelectedUrlId] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    const openDeleteModal = useCallback((id) => {
      setSelectedUrlId(id);
      setShowDeleteModal(true);
    }, []);

    const closeDeleteModal = useCallback(() => setShowDeleteModal(false), []);

    const openEditModal = useCallback(() => setShowEditModal(true), []);

    const closeEditModal = useCallback(() => setShowEditModal(false), []);

    return (
      <>
        <tr>
          <td>{url.id}</td>
          <td>{url.url}</td>
          <td>{url.description}</td>
          <td>
            <div className="d-flex gap-3 justify-content-center">
              <button className="btn btn-warning" onClick={openEditModal}>
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => openDeleteModal(url.id)}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>

        <EditUrlModal
          showModal={showEditModal}
          closeModal={closeEditModal}
          url={url}
        />
        <DeleteUrlModal
          showModal={showDeleteModal}
          closeModal={closeDeleteModal}
          urlId={selectedUrlId}
        />
      </>
    );
  },
  (prevProps, nextProps) => isEqual(prevProps.url, nextProps.url)
);

export default UrlTableRow;
