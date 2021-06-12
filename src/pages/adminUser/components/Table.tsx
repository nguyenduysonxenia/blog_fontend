import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {  toast } from 'react-toastify';
import ButtonOtherUser from '../../adminHome/conponents/ButtonOtherPost'
import {useDispatch} from 'react-redux'
import LoadingBG from '../../../components/Loading/LoadingBG'
import userApi from '../../../api/UserAPI'
import {setUser} from '../AdminUserSlice'
function Table(props: any) {
  const dispatch = useDispatch();
  const [loading,setLoading] = useState(false);
  const listUser = props.listUser;
  const handleDeleteUser = async (idUser: any)=>{
    setLoading(true)
    let response = await userApi.toggleUser(idUser)
    dispatch(setUser(response))
    setLoading(false)
    toast.success(` 🦄  Updated User successfully`,{ position:"top-center" })
  }
  let renderList = listUser.map((user: any,index: number)=>{
    return (
      <tr key={index}>
          <th scope="row">{index +1}</th>
          <td>{user.username}</td>
          <th>{user.email}</th>
          <td>{user.deleted ? 'Deleted' : 'Active'}</td>
          <td><ButtonOtherUser id={user._id} deleted ={user.deleted}  handleDeleteProps={handleDeleteUser}/></td>
      </tr>
    )
  })
  return (
    <>
     {loading ? <LoadingBG/> : ''}
    <table className="table table-responsive table-block">
      <thead>
        <tr>
          <th>STT</th>
          <th>Username</th>
          <th>Email</th>
          <th>Status</th>
          <th>Other</th>
        </tr>
      </thead>
      <tbody>
        {renderList}
      </tbody>
    </table>
    </>
  );
}

Table.propTypes = {
  listUser : PropTypes.array
};

export default Table;
