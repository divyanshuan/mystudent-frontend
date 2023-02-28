import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./studentdetail.css";

import CycloneIcon from "@mui/icons-material/Cyclone";
import Pagebanner from "../comman/pagebanner";
import axios from "../../api/axios";
import baseUrl from "../../utils/baseurl";

const StudentDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [edu, setEdu] = useState([]);

  useEffect(() => {
    axios
      .get(`/student/get/${id}`)
      .then((res) => {
        setData(res?.data.data);
        setEdu(res?.data.data.education);
      })
      .catch((eror) => console.log(eror));
  }, [id]);

  const fullname = `${data.firstname}  ${data.lastname}`;

  return (
    <div className="main_detail">
      <Pagebanner head="student Detail" />
      <div className="details_student">
        <div className="image_sec">
          <div className="img_student">
            <img
              src={
                data.photopath
                  ? `${baseUrl}/storage/student/${data.photopath}`
                  : "data:image/jpeg;base64,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"
              }
              alt=""
            />
          </div>
          <div className="main_had">
            <div className="table_head">
              <CycloneIcon />
              <h3>General Detail</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <th width="30%">Name</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{fullname}</td>
                </tr>
                <tr>
                  <th width="30%">Roll</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.roll}</td>
                </tr>
                <tr>
                  <th width="30%">Center</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.added_by}</td>
                </tr>
                <tr>
                  <th width="30%">Batch</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.batch}</td>
                </tr>
                <tr>
                  <th width="30%">Course</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.course}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="detail_sec">
          <div className="main_table">
            <div className="table_head">
              <CycloneIcon />
              <h3>General Detail</h3>
            </div>
            <table>
              <tbody>
                <tr>
                  <th width="30%"> Father's Name</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.fathersname}</td>
                </tr>
                <tr>
                  <th width="30%">Mother's Name</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.mothersname}</td>
                </tr>
                <tr>
                  <th width="30%">Gender</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.gender}</td>
                </tr>
                <tr>
                  <th width="30%">Category</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.category}</td>
                </tr>
                <tr>
                  <th width="30%">Date of Birth</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.dob}</td>
                </tr>
                <tr>
                  <th width="30%">Addhar No</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{data.aadhar}</td>
                </tr>
                <tr>
                  <th width="30%">Address</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{edu.address}</td>
                </tr>
                <tr>
                  <th width="30%">District</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{edu.district}</td>
                </tr>
                <tr>
                  <th width="30%">State</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{edu.state}</td>
                </tr>
                <tr>
                  <th width="30%">Pin</th>
                  <td width="2%" className="coln">
                    :
                  </td>
                  <td className="data">{edu.pin}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
