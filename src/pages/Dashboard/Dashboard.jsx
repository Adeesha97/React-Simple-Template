import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  let navigate = useNavigate();
  return (
    <div>
      <Card>
        <Card.Header>
          <h4 style={{ textAlign: "center" }}> Browse file to upload</h4>
        </Card.Header>
        <Card.Body>
          <Form>
            <div
              className="d-flex justify-content-center"
              style={{ textAlign: "center" }}
              size="500px"
            >
              <FaCloudUploadAlt />
            </div>

            <input type="file" />

            <button
              type="submit"
              className="btn btn-primary"
              style={{ marginTop: "10px" }}
              onClick={() => navigate("/submit")}
            >
              Upload
            </button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Dashboard;
