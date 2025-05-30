PGDMP      5    
            }            post    17.4    17.4     �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    16409    post    DATABASE     j   CREATE DATABASE post WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
    DROP DATABASE post;
                     postgres    false            �            1259    16420    posts    TABLE     D  CREATE TABLE public.posts (
    id integer NOT NULL,
    user_id integer NOT NULL,
    autor character varying(150) NOT NULL,
    likes integer NOT NULL,
    comentarios integer NOT NULL,
    salvamentos integer NOT NULL,
    compartilhamentos integer NOT NULL,
    imagem character varying(255) NOT NULL,
    photo text
);
    DROP TABLE public.posts;
       public         heap r       postgres    false            �            1259    16419    posts_id_seq    SEQUENCE     �   CREATE SEQUENCE public.posts_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.posts_id_seq;
       public               postgres    false    220                        0    0    posts_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.posts_id_seq OWNED BY public.posts.id;
          public               postgres    false    219            �            1259    16411    users    TABLE     �   CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    email character varying(100) NOT NULL,
    age integer
);
    DROP TABLE public.users;
       public         heap r       postgres    false            �            1259    16410    users_id_seq    SEQUENCE     �   CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 #   DROP SEQUENCE public.users_id_seq;
       public               postgres    false    218                       0    0    users_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;
          public               postgres    false    217            ]           2604    16423    posts id    DEFAULT     d   ALTER TABLE ONLY public.posts ALTER COLUMN id SET DEFAULT nextval('public.posts_id_seq'::regclass);
 7   ALTER TABLE public.posts ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            \           2604    16414    users id    DEFAULT     d   ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);
 7   ALTER TABLE public.users ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    218    217    218            �          0    16420    posts 
   TABLE DATA           v   COPY public.posts (id, user_id, autor, likes, comentarios, salvamentos, compartilhamentos, imagem, photo) FROM stdin;
    public               postgres    false    220   9       �          0    16411    users 
   TABLE DATA           5   COPY public.users (id, name, email, age) FROM stdin;
    public               postgres    false    218   �                  0    0    posts_id_seq    SEQUENCE SET     :   SELECT pg_catalog.setval('public.posts_id_seq', 7, true);
          public               postgres    false    219                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 57, true);
          public               postgres    false    217            c           2606    16425    posts posts_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_pkey;
       public                 postgres    false    220            _           2606    16418    users users_name_key 
   CONSTRAINT     O   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_name_key UNIQUE (name);
 >   ALTER TABLE ONLY public.users DROP CONSTRAINT users_name_key;
       public                 postgres    false    218            a           2606    16416    users users_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public                 postgres    false    218            d           2606    16426    posts posts_user_id_fkey    FK CONSTRAINT     w   ALTER TABLE ONLY public.posts
    ADD CONSTRAINT posts_user_id_fkey FOREIGN KEY (user_id) REFERENCES public.users(id);
 B   ALTER TABLE ONLY public.posts DROP CONSTRAINT posts_user_id_fkey;
       public               postgres    false    4705    218    220            �   y   x�3�4���?ܖ���S��ih�i�i�i̙�����k��U����et�I,�LT�M�KI-�42�(��*5�)�w��/K��K�4�B�S��<�3"Ԙ�8��@V	(Ci� ]�3�      �   �  x�m�Kr�6�׍S�(�eJ����3��LɮYͦEB�@BI-��*��ur��$�eB�J��]`���o��Y���N^�:#�ԨykQ*^�����³����áu����b9ܷ�5��>J@�;b����*V��d�<Ƚ0=�>�b:�:�w�k�?�e��}�}�~���v�A��&]���({W��
�P�,:#��+z�*��à vx�6�/hH�G���ϼ�ϳ��di�h��_�5\;��k���&[�"qE4�z��;�����N��Г%n<�ϭXZ�������E��{O��4�ݰt���H����ÛG�;�w����1*I�$��L.�鉣���w,[A�5�&���Y薟<���Y�4�{RX���D��g,���(�M'4r^�C�z��~Ni�^�N�G�yX��B<����(y�W%Ϯ�c���e%M���?ru
����dw����n��=/�������	�Ŏ&���g���+�װ�sb{�����{)���=�	򪍡��G>8�����������B6�&K4qG�~yj�OZ�A��a�}����%� D$L\xZN|��^�d��x3��!`쏼�Y�c�ﲣi���+1?����pO]�)ha� �`N9��-��E~�1�����>��'�,�3�)��F�L���7�����Nt8`��P�q����+�j����v|����=�
4;�cC��Q{ZnZ�<Ia��0K�Ջ\����Y(�/y�~ '��Q쵢��H/.^S�nx�\\�~��Od�A��L'7cG�<��6�xZ�cŊ��vߺ{��]{��b����Oֺ�|RwC���zY,��ͽR�rO�٥|�{����I����<�C{���mH>+�p:�{�;�"������p���X���[HPXm�mXY^.��YĞ��sAt��z��2K���zZ�{�%_��1�?���     