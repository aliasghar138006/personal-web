import React, { useContext, useEffect, useState } from "react";
import DashboardPage from "components/templates/DashboardPage";
import { VerifyToken } from "utils/passwordOperations";
import { DataContext } from "context/Context";
import { useRouter } from "next/router";

function Index(props) {
  return (
    <div>
      <DashboardPage />
    </div>
  );
}

export default Index;

export async function getServerSideProps(context) {
  const { token } = context.req.cookies;
  const SECRET_KEY = 'e73f1ece5087b8a5ae33998952202202';
  const verifyToken = VerifyToken(token, SECRET_KEY);
  if (!verifyToken) {
    return {
      redirect: {
        destination: "/admin",
        permanent: true,
      },
    };
  }
  return {
    props: {},
  };
}
