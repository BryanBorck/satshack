
create table bets(
    id serial,
    public_key_starter text,
    public_key_accepter text,
    value integer,
    odd text,
    theme integer,
    status text
);


create table themes(
    id serial,
    name text
);