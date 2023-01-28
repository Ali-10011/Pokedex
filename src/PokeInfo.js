import React from "react";
import { useState } from "react";

export const PokeInfo = (props) => {
  return (
    <div className="text-center">
      {console.log(props.pokeinfo)}
      <img
        src={props.pokeinfo.sprites.other["official-artwork"].front_default}
        alt={props.pokeinfo.name}
      />
      <div class="container">
        <div class="row border">
          <div class="col">ID</div>
          <div class="col">{props.pokeinfo.id}</div>
          <div class="col">Weight</div>
          <div class="col">{props.pokeinfo.weight + " lbs"}</div>
        </div>
        <div class="row border">
          <div class="col">Name</div>
          <div class="col">{props.pokeinfo.name}</div>
          <div class="col">Types</div>
          <div class="col">
            {props.pokeinfo.types.map((pokemon) => {
              return <h6>{pokemon.type.name}</h6>;
            })}
          </div>
        </div>
        <div class="row border">
          <div class="col">ID</div>
          <div class="col">{props.pokeinfo.id}</div>
          <div class="col">Weight</div>
          <div class="col">{props.pokeinfo.weight + " lbs"}</div>
        </div>
        <div class="row border">
          <div class="col">Name</div>
          <div class="col">{props.pokeinfo.name}</div>
          <div class="col">Types</div>
          <div class="col">
            {props.pokeinfo.types.map((pokemon) => {
              return <h6>{pokemon.type.name}</h6>;
            })}
          </div>
        </div>
      </div>

      {/* <table class="table table-bordered text-center">
        <tbody>
          <tr>
            <th scope="row">
              <h2>ID</h2>{" "}
            </th>
            <td>
              <h3>{props.pokeinfo.id}</h3>
            </td>

            <th scope="row">
              <h2>Name</h2>
            </th>
            <td>
              <h3>{props.pokeinfo.name}</h3>
            </td>
          </tr>

          <tr>
            <th scope="row">
              <h2>Types</h2>
            </th>
            <td>
              {props.pokeinfo.types.map((pokemon) => {
                return <h3>{pokemon.type.name}</h3>;
              })}
            </td>
            <th scope="row">
              <h2>Weight</h2>
            </th>
            <td>
              <h3>{props.pokeinfo.weight + " lbs"} </h3>
            </td>
          </tr>
        </tbody>
      </table> */}
    </div>
  );
};
