
create table bets(
    id serial,
    public_key_starter text,
    public_key_accepter text,
    value integer,
    odd text,
    theme integer,
    status text,
    option text
);


create table themes(
    id serial,
    name text,
    option_1 text,
    option_2 text,
    description text,
    img text
);