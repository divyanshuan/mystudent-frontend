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
            <img src={`${baseUrl}/storage/student/${data.photopath}`} alt="" />
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
