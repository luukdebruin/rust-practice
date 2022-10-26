(function() {var implementors = {};
implementors["typenum"] = [{"text":"impl&lt;I:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Integer.html\" title=\"trait typenum::marker_traits::Integer\">Integer</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;I&gt; for <a class=\"struct\" href=\"typenum/int/struct.Z0.html\" title=\"struct typenum::int::Z0\">Z0</a>","synthetic":false,"types":["typenum::int::Z0"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt;: PrivateRem&lt;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html#associatedtype.Output\" title=\"type core::ops::arith::Rem::Output\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ul&gt;: PrivateRem&lt;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html#associatedtype.Output\" title=\"type core::ops::arith::Rem::Output\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::PInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt;: PrivateRem&lt;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html#associatedtype.Output\" title=\"type core::ops::arith::Rem::Output\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.PInt.html\" title=\"struct typenum::int::PInt\">PInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a> + <a class=\"trait\" href=\"typenum/marker_traits/trait.NonZero.html\" title=\"trait typenum::marker_traits::NonZero\">NonZero</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt; for <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Ul: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ul&gt;: PrivateRem&lt;&lt;Ul as <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Ur&gt;&gt;::<a class=\"associatedtype\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html#associatedtype.Output\" title=\"type core::ops::arith::Rem::Output\">Output</a>, <a class=\"struct\" href=\"typenum/int/struct.NInt.html\" title=\"struct typenum::int::NInt\">NInt</a>&lt;Ur&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::int::NInt"]},{"text":"impl&lt;Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Br:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UTerm.html\" title=\"struct typenum::uint::UTerm\">UTerm</a>","synthetic":false,"types":["typenum::uint::UTerm"]},{"text":"impl&lt;Ul:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Bl:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>, Ur:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Unsigned.html\" title=\"trait typenum::marker_traits::Unsigned\">Unsigned</a>, Br:&nbsp;<a class=\"trait\" href=\"typenum/marker_traits/trait.Bit.html\" title=\"trait typenum::marker_traits::Bit\">Bit</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;&gt; for <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;: <a class=\"trait\" href=\"typenum/type_operators/trait.Len.html\" title=\"trait typenum::type_operators::Len\">Len</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"type\" href=\"typenum/operator_aliases/type.Length.html\" title=\"type typenum::operator_aliases::Length\">Length</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;&gt;: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Sub.html\" title=\"trait core::ops::arith::Sub\">Sub</a>&lt;<a class=\"struct\" href=\"typenum/bit/struct.B1.html\" title=\"struct typenum::bit::B1\">B1</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.64.0/core/primitive.unit.html\">()</a>: PrivateDiv&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;, <a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ur, Br&gt;, <a class=\"type\" href=\"typenum/consts/type.U0.html\" title=\"type typenum::consts::U0\">U0</a>, <a class=\"type\" href=\"typenum/consts/type.U0.html\" title=\"type typenum::consts::U0\">U0</a>, <a class=\"type\" href=\"typenum/operator_aliases/type.Sub1.html\" title=\"type typenum::operator_aliases::Sub1\">Sub1</a>&lt;<a class=\"type\" href=\"typenum/operator_aliases/type.Length.html\" title=\"type typenum::operator_aliases::Length\">Length</a>&lt;<a class=\"struct\" href=\"typenum/uint/struct.UInt.html\" title=\"struct typenum::uint::UInt\">UInt</a>&lt;Ul, Bl&gt;&gt;&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["typenum::uint::UInt"]},{"text":"impl&lt;Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.ATerm.html\" title=\"struct typenum::array::ATerm\">ATerm</a>","synthetic":false,"types":["typenum::array::ATerm"]},{"text":"impl&lt;V, A, Rhs&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Rhs&gt; for <a class=\"struct\" href=\"typenum/array/struct.TArr.html\" title=\"struct typenum::array::TArr\">TArr</a>&lt;V, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;V: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Rhs&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/ops/arith/trait.Rem.html\" title=\"trait core::ops::arith::Rem\">Rem</a>&lt;Rhs&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;Rhs: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.64.0/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a>,&nbsp;</span>","synthetic":false,"types":["typenum::array::TArr"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()