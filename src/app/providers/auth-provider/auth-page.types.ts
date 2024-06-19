import { NextPage } from 'next';

export type TypesRoles = {
  isOnlyCustomer?: boolean;
};

export type NextPageAuth<P = {}> = NextPage<P> & TypesRoles;

export type TypeComponentAuthFields = { Component: TypesRoles };
